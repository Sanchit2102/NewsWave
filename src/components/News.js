import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Category from "./Category";

const News = ({ country = "in", pageSize = 6, category = "general", setProgress }) => {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    document.title = `NewsWave-${capitalize(category)}`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function updateNews() {
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&country=in&page=${page}&pageSize=${pageSize}`;
    setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setProgress(100);
  }

  async function fetchMoreData() {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&country=in&page=${page + 1}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

  return (
    <>
      <h1 className="text-center" style={{marginTop:"90px",marginBottom:"20px"}}>
        NewsWave - Top {capitalize(category)} Headlines
      </h1>
      <Category />
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title ? element.title.slice(0, 45) + "..." : ""
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 60) + "..."
                      : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;

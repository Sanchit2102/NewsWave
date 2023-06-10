import React from "react";

const NewsItem = (props) => {
 
  let { title, description, imageUrl, newsUrl, author, date, source } =
   props;
  return (
    <div className="my-3 d-flex justify-content-evenly">
      <div
        className="card "
        style={{ width: "18rem", border: "2px solid black" }}
      >
        <img
          src={
            !imageUrl
              ? "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__480.png"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title ? title.substr(0, 40) + "..." : ""}
          </h5>

          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "50%" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <p className="card-text">
            {description
              ? description.substr(0, 60) + "..."
              : title.substr(0, 60) + "..."}
          </p>
          <p className="card-text">
            <small>
              Posted on {new Date(date).toGMTString()} By{" "}
              {author ? author : source}{" "}
            </small>
          </p>
          <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

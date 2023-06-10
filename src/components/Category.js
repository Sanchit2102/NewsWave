import { NavLink } from "react-router-dom";

function Category() {
  return (
    <nav className="navbar navbar-expand-lg mb-3 fw-bold">
      <button
        className="navbar-toggler mb-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2 mb-2">
            <NavLink
              className="btn btn-outline-dark"
              to="/business"
              activeClassName="active"
            >
              Business
            </NavLink>
          </li>
          <li className="nav-item mx-2 mb-2">
            <NavLink
              className="btn btn-outline-dark"
              to="/entertainment"
              activeClassName="active"
            >
              Entertainment
            </NavLink>
          </li>
          <li className="nav-item mx-2 mb-2">
            <NavLink
              className="btn btn-outline-dark"
              to="/general"
              activeClassName="active"
            >
              General
            </NavLink>
          </li>
          <li className="nav-item mx-2 mb-2">
            <NavLink
              className="btn btn-outline-dark"
              to="/health"
              activeClassName="active"
            >
              Health
            </NavLink>
          </li>
          <li className="nav-item mx-2 mb-2">
            <NavLink
              className="btn btn-outline-dark"
              to="/science"
              activeClassName="active"
            >
              Science
            </NavLink>
          </li>
          <li className="nav-item mx-2 mb-2">
            <NavLink
              className="btn btn-outline-dark"
              to="/sports"
              activeClassName="active"
            >
              Sports
            </NavLink>
          </li>
          <li className="nav-item mx-2 mb-2">
            <NavLink
              className="btn btn-outline-dark"
              to="/technology"
              activeClassName="active"
            >
              Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Category;

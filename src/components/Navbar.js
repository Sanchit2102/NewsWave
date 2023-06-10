import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
        <img src="logo.png" alt="logo" style={{widht:"50px",height:"50px",transform:"scale(1.5)"}}/>
          <Link className="navbar-brand me-auto" to="/">
            NewsWave
          </Link>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

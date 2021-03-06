import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
        CHATTOGRAM LAUNDRY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
               HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
               SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
               CONTACT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sharedashboard">
              DASHBOARD
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to="/login"
                
              >
              LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

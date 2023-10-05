import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/emplist">
          EMPLOYEE LIST
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/aboutemp">
                ABOUT EMP <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactemp">
                CONTACT EMP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo1">
                Apidemo1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo2">
                Apidemo2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo3">
                Apidemo3
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

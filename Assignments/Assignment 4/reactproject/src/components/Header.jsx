import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/">
            Kings Engineering College
          </Link>

          <button
            className="navbar-toggler"
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
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>


              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departments
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/department/it">
                      IT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/department/cse">
                      CSE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/department/mech">
                      Mechanical
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/department/ece">
                      ECE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/department/mba">
                      MBA
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>
      </div>
  );
};

export default Header;

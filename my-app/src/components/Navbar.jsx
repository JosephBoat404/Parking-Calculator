import React from "react";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.montclair.edu/academics/academic-calendar/"
                target="_blank"
              >
                Semester
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.montclair.edu/facilities/our-services/parking-services/parking-rates-and-fees/"
                target="_blank"
              >
                Parking Rate
              </a>
            </li>


            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                target="_blank"
              >
                Edit Rate 
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

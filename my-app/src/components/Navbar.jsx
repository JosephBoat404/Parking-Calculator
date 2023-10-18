import React from "react";
import icon from "../Icons/Addparking.svg";
import home from "../Icons/home.svg";
import semestericon from "../Icons/semester.svg"
import Parkingicon from "../Icons/parkingicon.svg"

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
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={home}
                  alt="Home"
                  style={{ marginRight: "8px", marginBottom: "5px" }}
                />
                Home
              </a>
            </li>
            <li className="nav-item">
            <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={semestericon}
                  alt="Home"
                  style={{ marginRight: "8px", marginBottom: "5px" }}
                />
                Semester
              </a>
            </li>
            <li className="nav-item">
            <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={Parkingicon}
                  alt="Home"
                  style={{ marginRight: "8px", marginBottom: "5px" }}
                />
                Parking Rate
              </a>
            </li>

            <li className="nav-item">
            <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={icon}
                  alt="Home"
                  style={{ marginRight: "8px", marginBottom: "5px" }}
                />
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

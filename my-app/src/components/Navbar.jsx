import React from "react";
import icon from "../Icons/Addparking.svg";

function Navbar({ onEditRateClick }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler "
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
                Parking Rate
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-light ml-auto editbtn" data-bs-toggle="modal" data-bs-target="#feeInputModal">



          
          <img
            src={icon}
            alt="Edit"
            style={{ marginRight: "8px", marginBottom: "5px" }}
          />
          Edit Rate
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

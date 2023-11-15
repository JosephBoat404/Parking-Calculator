import React from "react";
import Editbtn from "../Icons/Addparking.svg";
import navtoggler from "../Icons/navtoggler.svg";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";

function Navbar({ handleShowModal }) {
  const location = useLocation();
  const isHelpPage = location.pathname === "/Help";
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler custom-navbar-toggler focus-ring focus-ring-light "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={navtoggler} alt="burger nav" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ display: "flex", alignItems: "center" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#footer"
                style={{ display: "flex", alignItems: "center" }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Help"
                style={{ display: "flex", alignItems: "center" }}
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-outline-light ml-auto editbtn disabled"
          onClick={handleShowModal}
          disabled={isHelpPage}
        >
          <img
            src={Editbtn}
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

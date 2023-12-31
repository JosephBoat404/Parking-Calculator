import React from "react";
import Editbtn from "../Icons/Addparking.svg";
import navtoggler from "../Icons/navtoggler.svg";
import GraduateIcon from "../Icons/GraduateIcon.svg";
import { useLocation, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function Navbar({ handleShowModal }) {
  const location = useLocation();
  const isHelpPage = location.pathname === "/Help";
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }
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
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                onClick={scrollToBottom}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/Help"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
        <Button
          className="btn btn-outline-light ml-auto editbtn navbar-btn"
          onClick={handleShowModal}
          disabled={isHelpPage}
          type="button"
        >
          <img
            className="imgstyled"
            src={Editbtn}
            alt="Edit Rate"
          />
          Edit Rate
        </Button>

        <Dropdown className="ms-1">
          <Dropdown.Toggle variant="outline-light" id="dropdown-basic-button" className="ml-0 editbtn">
            <img src={GraduateIcon} className="imgstyled" alt="University Icon"/>
            Universities
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item active>Montclair State</Dropdown.Item>
            <Dropdown.Item disabled >Coming soon</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <Link to="/" className="customTitle">
        Live Culture
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <FontAwesomeIcon className="hamburger" icon={faHamburger} />
        </span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/books" className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/series" className="nav-link">
              Series
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/games" className="nav-link">
              Games
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;

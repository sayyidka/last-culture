import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container menu-container">
        <Link to="/" className="customTitle">
          Last Culture
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
                Livres
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link">
                Films
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/series" className="nav-link">
                Séries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/games" className="nav-link">
                Jeux
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;

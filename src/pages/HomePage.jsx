import React from "react";
import Cover from "../assets/images/cover-image.svg";
import { Link } from 'react-router-dom'
import "./pages.css";

export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "85vh" }}>
        <div className="col-xs-12 col-md-6 d-flex justify-content-left align-items-center">
          <div className="d-flex flex-column align-items-start">
            <h1 className="title">L'actualité culture.</h1>
            <p className="paragraph">
              Découvrez les dernières sorties livres, films, séries et jeux
              vidéos.
            </p>
            <span className="explorer-button align-self-start">
              <Link to="/books">Explorer</Link>
            </span>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 d-flex justify-content-center align-content-center image-container">
          <img src={Cover} alt="cover" style={{ maxWidth: "80%" }} />
        </div>
      </div>
    </div>
  );
}

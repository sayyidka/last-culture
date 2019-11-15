import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div className="card customCard">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img src={props.image} alt="item" className="customCardImg" />
          </div>
          <div className="col-xs-12 col-md-8 d-flex flex-column justify-content-center">
            <div className="ml-3">
              <h3 className="customCardTitle">{props.title}</h3>
              <p className="customCardAuthor text-justify">
                {props.author} - {props.sortie}
              </p>
              <p className="customCardScenario text-justify">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

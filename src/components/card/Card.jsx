import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div className="card customCard">
      <div className="card-body">
        <img src={props.image} alt="item" className="customCardImg" />
        <h3 className="customCardTitle">{props.title}</h3>
        <p className="customCardAuthor">
          {props.author} - {props.sortie}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

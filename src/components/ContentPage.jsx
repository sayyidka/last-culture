import React from "react";
import Card from "./card/Card";

function ContentPage(props) {
  const { title, type } = props;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-sm-12 white-column">
          <h1 className="text-center pageTitle">ACTUALITE DES {title}</h1>
          <div className="d-flex justify-content-center flex-wrap custom-card-container">
            {type.map(item => (
              <Card
                key={item.title}
                title={item.title}
                author={item.author}
                description={item.description}
                image={item.image}
                sortie={item.sortie}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;

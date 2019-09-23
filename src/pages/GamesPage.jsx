import React from "react";
import useFetch from "../helper";
import Card from "../components/card/Card";

function GamesPage() {
  const games = useFetch("games");
  const ulStyle = { padding: 0 };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-sm-12 customBackground">
          <h1 className="">ACTUALITE DES SERIES</h1>
          <ul style={ulStyle}>
            {games.map(item => (
              <Card
                key={item.title}
                title={item.title}
                author={item.author}
                description={item.description}
                image={item.image}
                sortie={item.sortie}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GamesPage;

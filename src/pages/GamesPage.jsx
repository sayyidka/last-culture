import React from "react";
import useFetch from "../helper";
import ContentPage from "../components/ContentPage";

function GamesPage() {
  const games = useFetch("games");

  return <ContentPage title="JEUX VIDEOS" type={games} />;
}

export default GamesPage;

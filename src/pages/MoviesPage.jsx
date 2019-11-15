import React from "react";
import useFetch from "../helper";
import ContentPage from "../components/ContentPage";

function MoviesPage() {
  const movies = useFetch("movies");

  return <ContentPage title="FILMS" type={movies} />;
}

export default MoviesPage;

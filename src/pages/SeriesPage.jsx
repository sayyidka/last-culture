import React from "react";
import useFetch from "../helper";
import ContentPage from "../components/ContentPage";

function SeriesPage() {
  const series = useFetch("series");

  return <ContentPage title="SERIES" type={series} />;
}

export default SeriesPage;

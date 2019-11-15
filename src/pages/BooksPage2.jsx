import React from "react";
import useFetch from "../helper";
import ContentPage from "../components/ContentPage";
import "./pages.css";

function BooksPage2() {
  const books = useFetch("books");

  return <ContentPage title="LIVRES" type={books} />;
}

export default BooksPage2;

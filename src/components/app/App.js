import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "../menu/Menu";
import HomePage from "../../pages/HomePage";
import BooksPage2 from "../../pages/BooksPage2";
import MoviesPage from "../../pages/MoviesPage";
import SeriesPage from "../../pages/SeriesPage";
import GamesPage from "../../pages/GamesPage";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Menu />
          <Route path="/" exact component={HomePage} />
          <Route path="/books" exact component={BooksPage2} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/series" exact component={SeriesPage} />
          <Route path="/games" exact component={GamesPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;

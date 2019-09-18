import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "../menu/Menu";
import BooksPage2 from "../../pages/BooksPage2";

function App() {
  return (
    <div>
      <Router>
        <Menu />

        <Route path="/books" exact component={BooksPage2} />
      </Router>
    </div>
  );
}

export default App;

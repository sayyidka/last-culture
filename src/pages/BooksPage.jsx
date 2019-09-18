import React, { Component } from "react";
import { callFlask } from "../helper";

class BooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books: []
    };
  }

  componentDidMount() {
    callFlask("/books")
      .then(response => {
        this.setState({ books: response.data });
        this.setState({ isLoaded: true });
        console.log(this.state.books);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { books, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <h1>Bookspage</h1>
          <ul>
            {books.map(book => (
              <li key={book.title}>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <img src={book.image} alt="" />
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BooksPage;

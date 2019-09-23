import React from "react";
import useFetch from "../helper";
import Card from "../components/card/Card";
import "./pages.css";

function BooksPage2() {
  // const [books, setBooks] = useState([]);
  // const url = "http://127.0.0.1:5000/books";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(url);
  //     console.log(response.data);
  //     setBooks(response.data);
  //   };
  //   fetchData();
  // }, []);
  const books = useFetch("books");
  const ulStyle = { padding: 0 };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-sm-12 customBackground">
          <h1 className="">ACTUALITE DES LIVRES</h1>
          <ul style={ulStyle}>
            {books.map(item => (
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

export default BooksPage2;

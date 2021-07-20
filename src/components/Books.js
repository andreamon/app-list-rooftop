import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Books() {
  const baseURL = "https://fakerapi.it/api/v1/books";
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setBooks(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Table responsive size="sm">
      <thead className="text-center">
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Genero</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 ? (
          books.map((book) => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>NO SE ENCONTRARON DATOS</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
export default Books;

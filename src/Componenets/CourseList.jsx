import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";
import { useEffect, useState } from "react";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./books.json").then((response) =>
      response.json().then((data) => setBooks(data))
    );
  }, []);
  //const books = useLoaderData();
  console.log("BookList", books);
  return (
    <section>
      <div className="mt-5">
        <h1 className="text-2xl p-2 mb-1 font-semibold">Popular Books</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;

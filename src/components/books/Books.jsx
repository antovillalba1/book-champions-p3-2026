import BookItem from "../bookItem/BookItem";
import { useState } from "react";
const Books = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState("");

  return (
    <>
      {selectedBook && (
        <p>
          El libro seleccionado es: <b>{selectedBook}</b>
        </p>
      )}
      <div className="d-flex justify-content-center flex-wrap">
        {books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            onSelectedBook={setSelectedBook}
          />
        ))}
      </div>
    </>
  );
};
export default Books;

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8800/books');
        console.log('first response', response);
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Jola Books Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div
            key={book?.id}
            className="book"
          >
            {book?.cover && (
              <img
                src={book?.cover}
                alt={''}
              />
            )}
            <h2>{book?.title}</h2>
            <p>{book?.desc}</p>
            <span>{book?.price}</span>
            <button className="delete">Delete</button>
            <button className="update">Update</button>
          </div>
        ))}
      </div>
      <button className="add-btn">
        <Link
          to="/add"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          Add Book
        </Link>
      </button>
    </div>
  );
};

export default Books;

import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Books = () => {
  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8800/books')
        console.log('first response', response);
        setBooks(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchBooks()
  }, []);

  return (
    <div>
      <h1>Jola Books Shop</h1>
      <ul>
        {books.map((book) => (
          <li key={book?.id}>
            {book?.cover && <img src={book?.cover} alt={book?.title} />}
            <h2>{book?.title}</h2>
            <p>{book?.desc}</p>
            <span>{book?.price}</span>
          </li>
        ))}
      </ul>
      <button>
        <Link to="/add">Add Book</Link>
      </button>
    </div>
  )
}

export default Books
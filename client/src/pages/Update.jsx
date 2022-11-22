import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [book, setBook] = React.useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split('/')[2];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((book) => ({ ...book, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  console.log('first book', book);

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Cover"
        onChange={handleChange}
        name="cover"
      />
      <button
        onClick={handleClick}
        className="update-btn btn"
      >
        Update
      </button>
    </div>
  );
};

export default Update;

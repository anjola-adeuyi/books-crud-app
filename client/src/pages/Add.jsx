import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [book, setBook] = React.useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((book) => ({ ...book, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/books', book);
      navigate('/');
      console.log('second response', response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log('first book', book);

  return (
    <div>
      <h1>Add Book</h1>
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
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;

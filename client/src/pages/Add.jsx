import React from 'react'

const Add = () => {
  const [book, setBook] = React.useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  console.log('first book', book);

  return (
    <div>
      <h1>Add Book</h1>
      <input type="text" placeholder="Title" onChange={handleChange} name="title" />
      <input type="text" placeholder="Description" onChange={handleChange} name="desc" />
      <input type="number" placeholder="Price" onChange={handleChange} name="price" />
      <input type="text" placeholder="Cover" onChange={handleChange} name="cover" />
    </div>
  )
}

export default Add
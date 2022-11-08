import React from 'react'

const Add = () => {
  const [book, setBook] = React.useState({
    title: '',
    desc: '',
    price: '',
    cover: '',
  });
  
  return (
    <div>
      <h1>Add Book</h1>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Description" />
      <input type="number" placeholder="Price" />
      <input type="text" placeholder="Cover" />
    </div>
  )
}

export default Add
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'anjolaoluwa',
  database: 'my-books',
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from crud app!');
});

app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM books';
  connection.query(sql, (err, data) => {
    console.log('rows', data, err);
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post('/books', (req, res) => {
  const sql = 'INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)';
  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
  connection.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json('Book successfully added!');
    }
  });
});

// TODO: add a PUT route to update a book

app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const sql = 'DELETE FROM books WHERE id = ?';

  connection.query(sql, [bookId], (err, data) => {
    if (err) {
      res.status(500).json('An error occurred', err);
    } else {
      res.json('Book successfully deleted!');
    }
  });
});

app.listen(8800, () => {
  console.log('Server is running on port 8800');
});

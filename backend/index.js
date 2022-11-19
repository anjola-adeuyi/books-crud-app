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
  connection.query(sql, (err, rows) => {
    console.log('rows', rows, err);
    if (err) {
      res.status(500).send('An error occurred', err);
    } else {
      res.json(rows);
    }
  });
});

app.post('/books', (req, res) => {
  const sql = 'INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)';
  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
  connection.query(sql, [values], (err, result) => {
    if (err) {
      res.status(500).send('An error occurred', err);
    } else {
      res.send('Book successfully added!');
      res.json(result);
    }
  });
});

// TODO: add a PUT route to update a book

app.delete('/books/:id', (req, res) => {
  const sql = 'DELETE FROM books WHERE id = ?';
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).send('An error occurred', err);
    } else {
      res.send('Book successfully deleted!');
      res.json(result);
    }
  });
});

app.listen(8800, () => {
  console.log('Server is running on port 8800');
});

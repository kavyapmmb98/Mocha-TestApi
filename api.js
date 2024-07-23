// api.js
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

let users = [
  { id: 1, name: 'Test' },
  { id: 2, name: 'Test2' },
];

app.use(bodyParser.json());

// GET  all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST  Add a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT Update a user by ID
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map(user => (user.id === parseInt(id) ? { ...user, ...updatedUser } : user));
  res.json(updatedUser);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app; 

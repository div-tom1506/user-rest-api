require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// for http logging
app.use(morgan('dev'));
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// to use mysql database
// user fields be like: username, email, password (to be encrypted before storing), created_at, updated_at
// api like: login, register, update, delete, get all users, get user by id, get user by username, get user by email
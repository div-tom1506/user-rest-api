require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
// for http logging
app.use(morgan('dev'));
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

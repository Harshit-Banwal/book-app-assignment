const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/bookRoutes');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    'mongodb+srv://harshitbanwal849:jvLNCKw83Xv7cAci@cluster0.nekrntp.mongodb.net/books_app?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));

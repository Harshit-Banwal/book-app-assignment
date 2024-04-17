const bookModal = require('../models/bookModal');

const getBook = async (req, res) => {
  const books = await bookModal.find();
  res.send(books);
};

const saveBook = (req, res) => {
  const { title, author } = req.body;

  if (!title) {
    throw new Error('Title not found');
  }

  if (!author) {
    throw new Error('Author not found');
  }

  bookModal
    .create({ title, author })
    .then((data) => {
      console.log('Saved Successfully...');
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: 'Something went wrong!' });
    });
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  if (!title) {
    throw new Error('Title not found');
  }

  if (!author) {
    throw new Error('Author not found');
  }

  bookModal
    .findByIdAndUpdate(id, { title, author })
    .then(() => {
      res.send('Updated Successfully....');
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: 'Something went wrong!' });
    });
};

const deleteBook = (req, res) => {
  const { id } = req.params;

  bookModal
    .findByIdAndDelete(id)
    .then(() => {
      res.send('Deleted Successfully....');
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: 'Something went wrong!' });
    });
};

module.exports = {
  getBook,
  saveBook,
  updateBook,
  deleteBook,
};

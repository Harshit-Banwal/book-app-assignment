const { Router } = require('express');
const {
  getBook,
  saveBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

const router = Router();

router.get('/get', getBook);
router.post('/save', saveBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;

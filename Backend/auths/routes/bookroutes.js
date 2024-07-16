const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const BookModel = require('../models/BookModel');

// GET a book by ID
router.get('/:bookId', asyncHandler(async (req, res) => {
  const book = await BookModel.findById(req.params.bookId);
  if (!book) {
    res.status(404).json({ message: 'Book not found' });
  } else {
    res.json(book);
  }
}));

module.exports = router;

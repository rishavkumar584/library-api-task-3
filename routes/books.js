const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// POST /books
router.post('/', async (req, res) => {
  const { title, author, publishedYear, genre, available } = req.body;

  // ✅ Basic validation
  if (!title || !author || !publishedYear || !genre || available === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newBook = new Book({ title, author, publishedYear, genre, available });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add book' });
  }
});

module.exports = router;

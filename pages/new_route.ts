import express from 'express';
import Book from '../models/book';

const router = express.Router();

/**
 * @route GET /books/count
 * @description Get the total count of books
 * @returns {number} The count of books in the collection
 */
router.get('/count', async (_, res) => {
  try {
    const count = await Book.getBookCount();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch book count' });
  }
});

export default router;


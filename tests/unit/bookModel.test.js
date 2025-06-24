// tests/unit/bookModel.test.js
const Book = require('../../models/Book');

describe('Book Model Unit Test', () => {
  it('should create a book object with valid schema', () => {
    const book = new Book({
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      publishedYear: 1988,
      genre: 'Fiction',
      available: true
    });

    expect(book.title).toBe('The Alchemist');
    expect(book.available).toBe(true);
    expect(book.genre).toBeDefined();
  });

  it('should fail validation if required field is missing', async () => {
    const book = new Book({ author: 'Unknown' });

    try {
      await book.validate();
    } catch (error) {
      expect(error.errors.title).toBeDefined();
    }
  });
});

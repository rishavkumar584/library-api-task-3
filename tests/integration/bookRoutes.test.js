// tests/integration/bookRoutes.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');
const Book = require('../../models/Book');

beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/librarydb_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});


afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  await Book.deleteMany({});
});

describe('Book Routes Integration Test', () => {
  it('should create and retrieve a book', async () => {
    const res = await request(app).post('/books').send({
      title: 'Clean Code',
      author: 'Robert C. Martin',
      publishedYear: 2008,
      genre: 'Software',
      available: true
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Clean Code');

    const getRes = await request(app).get('/books');
    expect(getRes.body.length).toBe(1);
    expect(getRes.body[0].author).toBe('Robert C. Martin');
  });
});

// tests/api/bookAPI.test.js
const request = require('supertest');
const app = require('../../server');

describe('Book API Test', () => {
  it('should return 404 for invalid route', async () => {
    const res = await request(app).get('/invalid-route');
    expect(res.statusCode).toBe(404);
  });

  it('should return 400 when missing fields', async () => {
    const res = await request(app).post('/books').send({ title: 'No Author' });
    expect(res.statusCode).toBe(400);
  });
});



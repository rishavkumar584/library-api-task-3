# Library API - Test Suite 

This project includes a test suite for the **Library API** built using **Jest** and **Supertest**. It covers both **unit** and **integration** tests for MongoDB models and API endpoints.

---

##  Test Cases

###  `models/Book.js`
- Validates the Mongoose schema.
- Ensures required fields like `title`, `author`, and `publishedYear` are present and properly validated.

###  `routes/books.js`
Integration tests for CRUD operations on `/api/books` endpoint:
-  Create a new book
-  Fetch all books
-  Fetch a specific book by ID
-  Update a book
-  Delete a book
-  Handles invalid data or missing fields gracefully

---

##  Testing Setup

###  Dependencies

```bash
npm install --save-dev jest supertest

---

##  Configuration

"scripts": {
  "test": "jest --coverage"
}


# Project Structure

- library-api/
- ├── models/
- │   └── Book.js               # Mongoose schema
- │
- ├── routes/
- │   └── books.js              # Express router
- │
- ├── tests/
- │   ├── unit/
- │   │   └── bookModel.test.js     # Unit test for model
- │   ├── api/
- │   │   └── bookAPI.test.js       # API test: validation & response codes
- │   └── integration/
- │       └── bookRoutes.test.js   # Integration test for route behavior
- │
- ├── server.js
- └── package.json

# Coverage Example

--------------------|---------|----------|---------|---------|
File                | % Stmts | % Branch | % Funcs | % Lines |
--------------------|---------|----------|---------|---------|
All files           |   80.00 |    90.00 |   40.00 |   82.00 |
 models/Book.js     |  100.00 |  100.00  |  100.00 |  100.00 |
 routes/books.js    |   88.88 |  100.00  |  100.00 |   88.88 |
 server.js          |   66.66 |   75.00  |     0.0 |   70.00 |
--------------------|---------|----------|---------|---------|

#Run Tests
 npm test

#!/bin/bash

echo "📘 Creating a new book..."
CREATE_RESPONSE=$(curl -s -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "publishedYear": 1988,
    "genre": "Fiction"
  }')

echo "Book created:"
echo $CREATE_RESPONSE

# Extracting the _id of the newly created book
BOOK_ID=$(echo $CREATE_RESPONSE | grep -o '"_id":"[^"]*' | cut -d':' -f2 | tr -d '"')

echo -e "\nFetching all books..."
curl -s http://localhost:3000/api/books | jq

echo -e "\n Updating the book's availability to false..."
curl -s -X PUT http://localhost:3000/api/books/$BOOK_ID \
  -H "Content-Type: application/json" \
  -d '{"available": false}' | jq

echo -e "\n Deleting the book with ID: $BOOK_ID"
curl -s -X DELETE http://localhost:3000/api/books/$BOOK_ID | jq

echo -e "\nCRUD test completed!"

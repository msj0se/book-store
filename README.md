# Bookstore App

## Description

This project is a simple application that simulates a bookstore system, allowing you to perform various actions such as viewing all books, filtering by availability, author, and price, and updating the availability of books. The logic is written in JavaScript, and the tests are written using `jest-cucumber`.

## Features

1. **View all books**: Returns a list of all books available in the bookstore.
2. **Filter by availability**: Filters books by availability (true or false).
3. **Filter by author**: Filters books by the author's name.
4. **Filter by price**: Filters books with a price less than or equal to the given value.
5. **Update availability**: Allows you to update the availability of a specific book by its title.

## Code Structure

The code is organized into functions that interact with an array of book objects:

- **showBooks**: Displays all books in the bookstore.
- **filterAvailability**: Filters books by availability (accepts a boolean value).
- **filterAuthor**: Filters books by author (accepts a string with the author's name).
- **filterPrice**: Filters books by price (accepts a numeric value as the maximum price).
- **updateAvailability**: Updates the availability of a specific book (by title).

### Example Usage

```javascript
const { showBooks, filterAvailability, filterAuthor, filterPrice, updateAvailability } = require('./main');

// View all books
console.log(showBooks());

// Filter available books
console.log(filterAvailability(true));

// Filter books by author
console.log(filterAuthor("Dan Brown"));

// Filter books by price
console.log(filterPrice(15));

// Update availability of a book
console.log(updateAvailability("The Da Vinci Code", true));

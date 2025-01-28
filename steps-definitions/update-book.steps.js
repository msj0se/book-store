const { defineFeature, loadFeature } = require("jest-cucumber");
const { bookstore, updateAvailability } = require("../main");
const feature = loadFeature("features/update-book.feature");

defineFeature(feature, (test) => {
  test("User updates a book's availability", ({ given, when, then }) => {
    
    let updatedBook;
    let bookExists;
    let availabilityStatus;

    given('the user is on the book store', () => {
      expect(bookstore).toBeDefined();
      expect(Array.isArray(bookstore)).toBe(true);
    });

    when(/^the user inputs the "(.*)" and the book exists in the book store$/, (bookName) => {
      bookName = bookName.replace(/"/g, '').trim();
      bookExists = bookstore.some(book => book.title === bookName);
      if (bookExists) {
        updatedBook = bookstore.find(book => book.title === bookName);
      }
      expect(bookExists).toBe(true);
    });

    when(/^the user updates the availability to "(.*)"$/, (availability) => {
      if (bookExists) {
        availabilityStatus = availability === "available" ? true : false;
        updateAvailability(updatedBook.title, availabilityStatus);
      }
    });

    then(/^the book store displays the book as "(.*)"$/, (expectedAvailability) => {
      const expected = expectedAvailability === "available" ? true : false;
      expect(updatedBook.availability).toBe(expected);
    });
  });
});

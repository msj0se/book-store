const { defineFeature, loadFeature } = require("jest-cucumber");
const { bookstore } = require("../main");
const feature = loadFeature("features/add-book.feature");

defineFeature(feature, (test) => {
  test("User adds a book to the bookstore", ({ given, when, then }) => {
    let book;

    given("the user is on the bookstore", () => {
      expect(Array.isArray(bookstore)).toBe(true);
    });

    when(
      /^the user adds a book with the following details: "(.*)", "(.*)", "(.*)", "(.*)"$/,
      (title, author, price, availability) => {
        book = {
          title: title,
          author: author,
          price: parseFloat(price),
          availability: availability === "true",
        };

        bookstore.push(book);
      }
    );

    then("the bookstore has the new book", () => {
      let found = false;

      for (let currentBook = 0; currentBook < bookstore.length; currentBook++) {
        if (
          bookstore[currentBook].title === book.title &&
          bookstore[currentBook].author === book.author &&
          bookstore[currentBook].price === book.price &&
          bookstore[currentBook].availability === book.availability
        ) {
          found = true;
          break;
        }
      }

      expect(found).toBe(true);
    });
  });
});

const { defineFeature, loadFeature } = require("jest-cucumber");
const { bookstore, filterAuthor } = require("../main");

const feature = loadFeature("features/display-author.feature");

defineFeature(feature, (test) => {
  test("User views books filtered by author in the bookstore", ({
    given,
    when,
    then,
  }) => {
    let filteredBooks;
    let author;

    given("the user is on the bookstore", () => {
      expect(Array.isArray(bookstore)).toBe(true);
      expect(bookstore.length).toBeGreaterThan(0);
    });

    when(/^the user inputs the "(.*)"$/, (inputAuthor) => {
      author = inputAuthor;
      filteredBooks = filterAuthor(author);
    });

    then("the bookstore displays all books filtered by author", () => {
      expect(filteredBooks.every((book) => book.author === author)).toBe(true);
    });
  });
});

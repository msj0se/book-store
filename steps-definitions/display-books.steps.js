const { defineFeature, loadFeature } = require("jest-cucumber");
const { bookstore, showBooks } = require("../main");
const feature = loadFeature("features/display-books.feature");

defineFeature(feature, (test) => {
  test("User views all books in the book store", ({ given, when, then }) => {

    given("the user is on the book store", () => {
      expect(bookstore).toBeDefined();
      expect(Array.isArray(bookstore)).toBe(true);
    });

    //supposed to be completed
    when("the user searches for all books", () => {
        //empty
    });

    then("the book store displays all the books", () => {
        const books = showBooks();
        expect(bookstore.length).toBeGreaterThan(0);
    })
  });
});

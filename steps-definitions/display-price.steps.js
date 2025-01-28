const { defineFeature, loadFeature } = require("jest-cucumber");
const { bookstore, filterPrice } = require("../main");

const feature = loadFeature("features/display-price.feature");

defineFeature(feature, (test) => {
  test("User views books filtered by price in the book store", ({
    given,
    when,
    then,
  }) => {
    let filteredBooks;

    given("the user is on the book store", () => {
      expect(Array.isArray(bookstore)).toBe(true);
      expect(bookstore.length).toBeGreaterThan(0);
    });

    when("the user selects the price filter from highest to lowest", () => {
      const maxPrice = 15;
      filteredBooks = filterPrice(maxPrice);
    });

    then("the book store displays all books filtered by price", () => {
      expect(filteredBooks.every((book) => book.price <= 15)).toBe(true);
    });
  });
});

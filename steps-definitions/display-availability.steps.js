const { defineFeature, loadFeature } = require("jest-cucumber");
const { bookstore, filterAvailability } = require("../main");

const feature = loadFeature("features/display-availability.feature");

defineFeature(feature, (test) => {
  test("User views books that are available in the bookstore", ({
    given,
    when,
    then,
  }) => {
    let availableBooks;

    given("the user is on the bookstore", () => {
      expect(Array.isArray(bookstore)).toBe(true);
      expect(bookstore.length).toBeGreaterThan(0);
    });

    when("the user selects the availability filter for available books", () => {
      availableBooks = filterAvailability(true);
    });

    then("the bookstore displays all books that are available", () => {
      expect(availableBooks.every((book) => book.availability)).toBe(true);
    });
  });

  test("User views books that are not available in the bookstore", ({
    given,
    when,
    then,
  }) => {
    let unavailableBooks;

    given("the user is on the bookstore", () => {
      expect(Array.isArray(bookstore)).toBe(true);
      expect(bookstore.length).toBeGreaterThan(0);
    });

    when(
      "the user selects the availability filter for unavailable books",
      () => {
        unavailableBooks = filterAvailability(false);
      }
    );

    then("the bookstore displays all books that are not available", () => {
      expect(unavailableBooks.every((book) => !book.availability)).toBe(true);
    });
  });
});

Feature: Add book to book store

  Scenario Outline: User adds a book to the book store
    Given the user is on the book store
    When the user adds a book with the following details: "<title>", "<author>", "<price>", "<availability>"
    Then the book store has the new book

    Examples:
      | title             | author           | price | availability |
      | "It Ends with Us" | "Colleen Hoover" | 12.99 | false        |
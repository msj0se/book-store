Feature: Add book to bookstore

  Scenario Outline: User adds a book to the bookstore
    Given the user is on the bookstore
    When the user adds a book with the following details: "<title>", "<author>", "<price>", "<availability>"
    Then the bookstore has the new book

    Examples:
      | title             | author           | price | availability |
      | "It Ends with Us" | "Colleen Hoover" | 12.99 | false        |
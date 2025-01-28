Feature: Display all books in the book store

  Scenario: User views all books in the book store
    Given the user is on the book store
    When the user searches for all books
    Then the book store displays all the books
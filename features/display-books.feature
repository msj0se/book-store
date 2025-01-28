Feature: Display all books in the bookstore

  Scenario: User views all books in the bookstore
    Given the user is on the bookstore
    When the user searches for all books
    Then the bookstore displays all the books
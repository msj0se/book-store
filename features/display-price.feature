Feature: Display books filtered by price in the book store

  Scenario: User views books filtered by price in the book store
    Given the user is on the book store
    When the user selects the price filter from highest to lowest
    Then the book store displays all books filtered by price
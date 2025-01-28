Feature: Display books filtered by price in the bookstore

  Scenario: User views books filtered by price in the bookstore
    Given the user is on the bookstore
    When the user selects the price filter from highest to lowest
    Then the bookstore displays all books filtered by price
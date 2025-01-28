Feature: Display books filtered by availability in the bookstore

  Scenario: User views books that are available in the bookstore
    Given the user is on the bookstore
    When the user selects the availability filter for available books
    Then the bookstore displays all books that are available

  Scenario: User views books that are not available in the bookstore
    Given the user is on the bookstore
    When the user selects the availability filter for unavailable books
    Then the bookstore displays all books that are not available
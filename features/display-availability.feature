Feature: Display books filtered by availability in the book store

  Scenario: User views books that are available in the book store
    Given the user is on the book store
    When the user selects the availability filter for available books
    Then the book store displays all books that are available

  Scenario: User views books that are not available in the book store
    Given the user is on the book store
    When the user selects the availability filter for unavailable books
    Then the book store displays all books that are not available
Feature: Display books filtered by author in the bookstore

  Scenario Outline: User views books filtered by author in the bookstore
    Given the user is on the bookstore
    When the user inputs the "<author>"
    Then the bookstore displays all books filtered by author

    Examples:
      | author              |
      | "Freida McFadden"   |
      | "Grady Hendrix"     |
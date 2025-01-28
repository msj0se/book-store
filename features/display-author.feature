Feature: Display books filtered by author in the book store

  Scenario Outline: User views books filtered by author in the book store
    Given the user is on the book store
    When the user inputs the "<author>"
    Then the book store displays all books filtered by author

    Examples:
      | author              |
      | "Freida McFadden"   |
      | "Grady Hendrix"     |
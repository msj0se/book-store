Feature: Update book availability

  Scenario Outline: User updates a book's availability
    Given the user is on the book store
    When the user inputs the "<book name>" and the book exists in the book store
    And the user updates the availability to "<availability>"
    Then the book store displays the book as "<availability>"

    Examples:
      | book name           | availability |
      | "The Da Vinci Code" | available    |
      | "The Housemaid"     | unavailable  |

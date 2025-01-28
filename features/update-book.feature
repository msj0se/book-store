Feature: Update book availability

  Scenario Outline: User updates a book's availability
    Given the user is on the bookstore
    When the user inputs the "<book name>" and the book exists in the bookstore
    And the user updates the availability to "<availability>"
    Then the bookstore displays the book as "<availability>"

    Examples:
      | book name           | availability |
      | "The Da Vinci Code" | available    |
      | "The Housemaid"     | unavailable  |

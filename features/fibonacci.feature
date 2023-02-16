Feature: Fibonacci number sequences

  Scenario: Default sequence initiated
    When a fibonacci sequence is started
    Then the next number should be 1

  Scenario: Initialized with a legitimate fibonacci number
    Given a fibonacci sequence initialized to 8
    Then the next number should be 13

  Scenario: Sequence is initialized and skipped
    Given a fibonacci sequence initialized to 2
    When the sequence is skipped 3 times
    Then the state should be "The current number is 8"
    And the next number should be 13


  Scenario: Initialized with an illegitimate fibonacci number
    Given a fibonacci sequence incorrectly initialized to 7
    Then an exception should be thrown

  Scenario: Skipped by a float
    When a fibonacci sequence is started
    And the sequence is incorrectly skipped 3.5 times
    Then an exception should be thrown

  Scenario: Initialized with 0
    Given a fibonacci sequence incorrectly initialized to 0
    Then an exception should be thrown

Scenario: Initialized, called next multiple times, and skipped
Given a fibonacci sequence initialized to 8
When I call next 5 times
And the sequence is skipped 5 times
Then the next number should be 1597
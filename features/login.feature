Feature: Login

  Scenario: Valid login
    Given I am on the login page
    When I login with username "student" and password "Password123"
    Then I should be redirected to the dashboard

  Scenario: Invalid login due to invalid username
    Given I am on the login page
    When I login with username "incorrectUser" and password "Password123"
    Then I should see error message "Your username is invalid!"

  Scenario: Invalid login due to invalid password
    Given I am on the login page
    When I login with username "student" and password "incorrectPassword"
    Then I should see error message "Your password is invalid!"
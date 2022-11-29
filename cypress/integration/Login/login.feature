Feature: Login page

  Scenario: Successful login
    Given I am on the '/' page
    When I type 'test@user.co' into the 'email' field
    And I type 'P@ssW0rD!' into the 'password' field
    And I click the 'Submit' button
    Then I see the 'Logged In!' banner


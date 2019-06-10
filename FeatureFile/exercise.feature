Feature: Test Login functionality
Description: Registered User can use login credentials to get logged in to Testmeapp
username-swathi
password-password

Scenario: Test login with valid credentials
Given users open testmeApp
When user enters username as "swathi"
And user enters password as "password"
When user clicks login button
And verifies login success
Then close Testmeapp
 
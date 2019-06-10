Feature: check for search function

Scenario: Test search with key-Laptop
Given open testmeapp
When user enters "Laptop"
And user clicks Enter
Then check url

Scenario: Test search with key-Travel
Given open testmeapp
When user enters "Travel"
And user clicks Enter
Then check url

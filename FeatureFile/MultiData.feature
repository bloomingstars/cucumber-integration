Feature: Test Login functionality with multiple credentials

Scenario Outline: Test login with valid credentials
Given users open testmeApp
When user enters username as "<column1>"
And user enters password as "<column2>"
When user clicks login button
And verifies login success
Then close Testmeapp
 
Examples: 
|column1|column2|
|user1|pass1|
|user2|pass2|
|user3|pass3|
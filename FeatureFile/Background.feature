Feature: Test background keyword

Background: display welcome
When testme displays welcome message

@login @lali
Scenario: login
Given user opens testmeApp
When user enters usernam as "lalitha"
And user enters passwor as "password123"
When user clicks login buton

#@search @lali
#Scenario: search 
When user enter "Travel"
And user click Enter

@cart
Scenario: add to cart
When user adds to cart



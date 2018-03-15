Feature: Perform Login action on the homepage for an existing user using login details and check the validation.

Background: 

    Given User is on Home Page
@tag1
Scenario: To check whether Login is successful with Valid Credentials
    #provide valid username and password
    When User enters his valid Username and valid Password
	Then Login Successful

Scenario: To check whether validation is working with right username but wrong password
    #provide valid username and invalid password
	When User enters his valid Username and invalid Password
	Then Login is unsuccessful
    
 Scenario: To check whether validation is working with wrong username but right password
     #provide invalid username and a valid password
	When User enters his invalid Username and valid Password
	Then Login is unsuccessful
	
Scenario: To check whether validation is working with wrong username and wrong password
   #provide invalid username and invalid password
	When User enters his invalid Username and invalid Password
	Then Login is unsuccessful
	
	 
   
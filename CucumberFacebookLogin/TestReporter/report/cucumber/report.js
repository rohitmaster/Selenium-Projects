$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Perform Login action on the homepage for an existing user using login details and check the validation.",
  "description": "",
  "id": "perform-login-action-on-the-homepage-for-an-existing-user-using-login-details-and-check-the-validation.",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginValidation.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 13448284989,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "To check whether Login is successful with Valid Credentials",
  "description": "",
  "id": "perform-login-action-on-the-homepage-for-an-existing-user-using-login-details-and-check-the-validation.;to-check-whether-login-is-successful-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#provide valid username and password"
    }
  ],
  "line": 9,
  "name": "User enters his valid Username and valid Password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Login Successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginValidation.user_enters_his_valid_UserName_and_valid_Password()"
});
formatter.result({
  "duration": 7098048737,
  "status": "passed"
});
formatter.match({
  "location": "LoginValidation.login_Successful()"
});
formatter.result({
  "duration": 706912527,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginValidation.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9553315955,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To check whether validation is working with right username but wrong password",
  "description": "",
  "id": "perform-login-action-on-the-homepage-for-an-existing-user-using-login-details-and-check-the-validation.;to-check-whether-validation-is-working-with-right-username-but-wrong-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#provide valid username and invalid password"
    }
  ],
  "line": 14,
  "name": "User enters his valid Username and invalid Password",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Login is unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginValidation.user_enters_his_valid_Username_and_invalid_Password()"
});
formatter.result({
  "duration": 3236550374,
  "status": "passed"
});
formatter.match({
  "location": "LoginValidation.login_is_unsuccessful()"
});
formatter.result({
  "duration": 15858,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginValidation.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9767156339,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To check whether validation is working with wrong username but right password",
  "description": "",
  "id": "perform-login-action-on-the-homepage-for-an-existing-user-using-login-details-and-check-the-validation.;to-check-whether-validation-is-working-with-wrong-username-but-right-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#provide invalid username and a valid password"
    }
  ],
  "line": 19,
  "name": "User enters his invalid Username and valid Password",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Login is unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginValidation.user_enters_his_invalid_Username_and_valid_Password()"
});
formatter.result({
  "duration": 4978388394,
  "status": "passed"
});
formatter.match({
  "location": "LoginValidation.login_is_unsuccessful()"
});
formatter.result({
  "duration": 19256,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginValidation.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 10739299164,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To check whether validation is working with wrong username and wrong password",
  "description": "",
  "id": "perform-login-action-on-the-homepage-for-an-existing-user-using-login-details-and-check-the-validation.;to-check-whether-validation-is-working-with-wrong-username-and-wrong-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#provide invalid username and invalid password"
    }
  ],
  "line": 24,
  "name": "User enters his invalid Username and invalid Password",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Login is unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginValidation.user_enters_his_invalid_Username_and_invalid_Password()"
});
formatter.result({
  "duration": 4540660948,
  "status": "passed"
});
formatter.match({
  "location": "LoginValidation.login_is_unsuccessful()"
});
formatter.result({
  "duration": 26808,
  "status": "passed"
});
});
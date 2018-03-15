package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
// Step definitions to execute validation on Facebook Login page

public class LoginValidation {
	
	
	WebDriver driver;
	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page(){
	   
		// user is on facebook home page
		System.setProperty("webdriver.gecko.driver",
				"C:/Users/suren/workspace/CucumberSuren/Driver/geckodriver.exe");
		driver=new FirefoxDriver();
		driver.get("https://www.facebook.com/");
		
	}

	
	@When("^User enters his valid Username and valid Password$")
	public void user_enters_his_valid_UserName_and_valid_Password() {
	    
		//user enters his valid username and password and clicks login button
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("rohitman1990@gmail.com");
		driver.findElement(By.xpath(".//*[@id='pass']")).sendKeys("thalapathy1990");
		driver.findElement(By.xpath(".//*[@id='loginbutton']")).click();
	    
	}

	@When("^User enters his invalid Username and valid Password$")
	public void user_enters_his_invalid_Username_and_valid_Password() {
	    // username is invalid but password is a valid one
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("rohitman@gmail.com");
		driver.findElement(By.xpath(".//*[@id='pass']")).sendKeys("thalapathy1990");
		driver.findElement(By.xpath(".//*[@id='loginbutton']")).click();
	    
	}
	
	@Then("^Login Successful$")
	public void login_Successful() {
	    // Login validation using correct username and password is successful 
		
		driver.findElement(By.xpath(".//*[@id='findFriendsNav']")).click();
		System.out.println("Login successful");
		driver.close();
	   
	}
	
	@When("^User enters his invalid Username and invalid Password$")
	public void user_enters_his_invalid_Username_and_invalid_Password() {
	    // user details are incorrect
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("rohitman@gmail.com");
		driver.findElement(By.xpath(".//*[@id='pass']")).sendKeys("thalapathy");
		driver.findElement(By.xpath(".//*[@id='loginbutton']")).click();
	}
	
	@When("^User enters his valid Username and invalid Password$")
	public void user_enters_his_valid_Username_and_invalid_Password()  {
	    //user enters valid username but password is incorrect
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("rohitman1990@gmail.com");
		driver.findElement(By.xpath(".//*[@id='pass']")).sendKeys("123suren90");
		driver.findElement(By.xpath(".//*[@id='loginbutton']")).click();
	   
	}

	@Then("^Login is unsuccessful$")
	public void login_is_unsuccessful()  {
	    // Login is unsuccessful
		
	    
	}


	}

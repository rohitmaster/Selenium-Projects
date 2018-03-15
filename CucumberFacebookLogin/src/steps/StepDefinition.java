package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	
	WebDriver driver;
	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page(){
	    // user is on facebook login page
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

	@Then("^Login Successful$")
	public void login_Successful() {
	    // 
		
		driver.findElement(By.xpath(".//*[@id='findFriendsNav']")).click();
		System.out.println("Login successful");
	   
	}


	}

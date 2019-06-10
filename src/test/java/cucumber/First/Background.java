package cucumber.First;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import com.pack.Utilities.Util;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Background {
	WebDriver driver;
	@Given("user opens testmeApp")
	public void user_opens_testmeApp() {
		driver=Util.getData("chrome");
		 driver.get("http://10.232.237.143:443/TestMeApp/");
		 driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		 driver.findElement(By.partialLinkText("SignIn")).click();
	}
	@When("user enters usernam as {string}")
	public void user_enters_username_as(String string) {
	    driver.findElement(By.id("userName")).sendKeys(string);;
	}

	@When("user enters passwor as {string}")
	public void user_enters_password_as(String string) {
	    driver.findElement(By.id("password")).sendKeys(string);
	}

	@When("user clicks login buton")
	public void user_clicks_login_button() {
	   driver.findElement(By.name("Login")).click();
	}
	@When("testme displays welcome message")
	public void testme_displays_welcome_message() {
	   System.out.println("Welcome!");
	  
	}
	
	@When("user enter {string}")
	public void user_enters(String string) {
	    driver.findElement(By.id("myInput")).sendKeys(string);
	}

	@When("user click Enter")
	public void user_clicks_Enter() {
	    Actions act=new Actions(driver);
	    act.sendKeys(Keys.ENTER).click().build().perform();
	}

	@When("user adds to cart")
	public void user_adds_to_cart() {
	    //driver.findElement(By.partialLinkText("cart")).click();
		driver.findElement(By.className("btn btn-success btn-product")).click();
	}

}

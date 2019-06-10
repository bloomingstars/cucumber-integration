package cucumber.First;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.pack.Utilities.Util;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class exercise1 {
	
	WebDriver driver;
	
	@Given("users open testmeApp")
	public void users_open_testmeApp() {
	    driver=Util.getData("chrome");
	    driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
		driver.get("http://10.232.237.143:443/TestMeApp/");
		driver.findElement(By.partialLinkText("SignIn")).click();
	}

	@When("user enters username as {string}")
	public void user_enters_username_as(String string) {
	    driver.findElement(By.id("userName")).sendKeys(string);;
	}

	@When("user enters password as {string}")
	public void user_enters_password_as(String string) {
	    driver.findElement(By.id("password")).sendKeys(string);
	}

	@When("user clicks login button")
	public void user_clicks_login_button() {
	   driver.findElement(By.name("Login")).click();
	}

	@When("verifies login success")
	public void verifies_login_success() {
	   Assert.assertTrue(driver.findElement(By.className("has-validation-callback")).getText().contains
			   ("Username or Password is wrong here!!!"));
	}

	@Then("close Testmeapp")
	public void close_Testmeapp() {
	    driver.close();
	}

}

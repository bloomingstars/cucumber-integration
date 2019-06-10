package cucumber.First;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import com.pack.Utilities.Util;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class exercise2 {

	WebDriver driver;
	
	@Given("open testmeapp")
	public void open_testmeapp() {
		driver=Util.getData("chrome");
		driver.get("http://10.232.237.143:443/TestMeApp/");
	}

	@When("user enters {string}")
	public void user_enters(String string) {
	    driver.findElement(By.xpath("//*[@id='myInput']")).sendKeys(string);
	}

	@When("user clicks Enter")
	public void user_clicks_Enter() {
	    Actions act=new Actions(driver);
	    act.sendKeys(Keys.ENTER).click().build().perform();
	}

	@Then("check url")
	public void check_url() {
	   Assert.assertTrue(driver.getTitle().contains("Search"));
	   driver.close();
	}
}

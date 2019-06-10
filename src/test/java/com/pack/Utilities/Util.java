package com.pack.Utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Util {
	
	public static WebDriver getData(String browserName){
		if(browserName.equals("chrome")){
			System.setProperty("webdriver.chrome.driver","C:\\Users\\swathi.dinakaran\\selenium\\driver\\chromedriver_win32\\chromedriver.exe");
			return new ChromeDriver();
		}
		else if(browserName.equals("ie")){
			System.setProperty("webdriver.ie.driver","C:\\Users\\swathi.dinakaran\\selenium\\driver\\IEDriverServer.exe");
			return new InternetExplorerDriver();
		}
		else if(browserName.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "C:\\Users\\swathi.dinakaran\\selenium\\driver\\geckodriver.exe");
			return new FirefoxDriver();
		}
		else 
			return null;
	}
}

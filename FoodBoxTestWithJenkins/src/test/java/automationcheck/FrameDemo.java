package automationcheck;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

//import io.github.bonigarcia.wdm.WebDriverManager;

public class FrameDemo {
	public static void main(String[] args) {

		String path="C:\\Users\\sudip\\Desktop\\MainProject\\FoodBoxTestWithJenkins\\driver\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", path);
		
		WebDriver driver = new ChromeDriver();

		//load the webpage
		driver.get("http://localhost:4200/products");

		//maximize the window
		driver.manage().window().maximize();

		//provide implicit wait
		driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
		
		
		JavascriptExecutor jsDriver = (JavascriptExecutor)driver;  
		jsDriver.executeScript("scrollBy(0, 200)");  
		
		
		
	}

}

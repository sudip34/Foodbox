package automationcheck;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

//import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTest {
	public static void main(String[] args) {

		String path="C:\\Users\\sudip\\Desktop\\MainProject\\FoodBoxTestWithJenkins\\driver\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", path);
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:4200/user-login");
		
		driver.findElement(By.id("usr")).sendKeys("ssmith");
		driver.findElement(By.id("pwd")).sendKeys("Ab@123");
		driver.findElement(By.id("login-button")).click();
		driver.findElement(By.id("login-button")).click();
		
		//driver.close();
	}
}

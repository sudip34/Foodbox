package automationcheck;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

//import io.github.bonigarcia.wdm.WebDriverManager;

public class OrderTest {
	public static void main(String[] args) {

		String path="C:\\Users\\sudip\\Desktop\\MainProject\\FoodBoxTestWithJenkins\\driver\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", path);
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:4200/user-login");
		
		driver.findElement(By.id("usr")).sendKeys("ssmith");
		driver.findElement(By.id("pwd")).sendKeys("Ab@123");
		driver.findElement(By.id("login-button")).click();
		driver.findElement(By.id("login-button")).click();
		
		driver.get("http://localhost:4200/products");
		driver.findElement(By.id("addToCart")).click();
		driver.findElement(By.id("addToCart")).click();
		


		
		
		driver.get("http://localhost:4200/checkout");
		
		//test billing address
		
		driver.findElement(By.id("shippingAddressStreet")).sendKeys("Walter Rathenau Straße-30");
		driver.findElement(By.id("shippingAddressCity")).sendKeys("Halle");
		
		
		//locate the drop down list
		//Select class represents the drop downlist
		Select dropDown = new Select(driver.findElement(By.id("shippingAddressCountry")));
		
		// select by index
		dropDown.selectByIndex(2);
		
		
		Select dropDown2 = new Select(driver.findElement(By.id("shippingAddressState")));
		
		dropDown2.selectByIndex(13);
		driver.findElement(By.id("shippingAddressZip")).sendKeys("39106");
		
		
		//test billing address

		
		driver.findElement(By.id("billingAddressStreet")).sendKeys("Walter Rathenau Straße-30");
		driver.findElement(By.id("billingAddressCity")).sendKeys("Halle");
		
		
		//locate the drop down list
		//Select class represents the drop downlist
		Select dropDown3 = new Select(driver.findElement(By.id("billingAddressCountry")));
		
		// select by index
		dropDown3.selectByIndex(2);
		
		
		Select dropDown4 = new Select(driver.findElement(By.id("billingAddressState")));
		
		dropDown4.selectByIndex(13);
		
		driver.findElement(By.id("billingAddressZip")).sendKeys("39106");
		
		
		// Test CreditCard

		Select dropDown5 = new Select(driver.findElement(By.id("craditCardType")));
		
		// select by visible text
		dropDown5.selectByVisibleText("Master card");
		
		driver.findElement(By.id("nameOnCard")).sendKeys("Sam Smith");
		
		
		driver.findElement(By.id("cardNumber")).sendKeys("1234567891234567");
		
		driver.findElement(By.id("securityCode")).sendKeys("123");
		
		//Select class represents the drop downlist
		Select dropDown6 = new Select(driver.findElement(By.id("craditCardExpiarationYear")));
		
		// select by visible text
		dropDown6.selectByIndex(1);
		
		//Select class represents the drop downlist
		Select dropDown7 = new Select(driver.findElement(By.id("craditCardExpiarationMonth")));
		
		// select by visible text
		dropDown7.selectByIndex(11);
		driver.findElement(By.id("purchase")).submit();
	
	}

}

package com.foodbox;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;


public class NewTest {
	
	private WebDriver driver;
//	SoftAssert soft =new SoftAssert();
	
  @BeforeTest
  public void beforeTest() {
	  String path="C:\\Users\\sudip\\Desktop\\MainProject\\FoodBoxTestWithJenkins\\driver\\chromedriver.exe";
	  System.setProperty("webdriver.chrome.driver", path);
	  driver = new ChromeDriver();
  }
  
  @Test
  public void frameTest() {
		//load the webpage
		driver.get("http://localhost:4200/products");

		//maximize the window
		driver.manage().window().maximize();

		//provide implicit wait
		driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
		
		
		JavascriptExecutor jsDriver = (JavascriptExecutor)driver;  
		jsDriver.executeScript("scrollBy(0, 200)");  
  }
  
//  @Test
//  public void testLogin() {
//
//		
//		driver.get("http://localhost:4200/user-login");
//		
//		driver.findElement(By.id("usr")).sendKeys("ssmith");
//		driver.findElement(By.id("pwd")).sendKeys("Ab@123");
//		driver.findElement(By.id("login-button")).click();
//		driver.findElement(By.id("login-button")).click(); 
//	
//  } 
  
  
  @Test
  public void orderTest() {

		driver.get("http://localhost:4200/user-login");
		driver.findElement(By.id("usr")).sendKeys("ssmith");
		driver.findElement(By.id("pwd")).sendKeys("Ab@123");
		driver.findElement(By.id("login-button")).click();
		driver.findElement(By.id("login-button")).click();
		
		driver.get("http://localhost:4200/products");
		driver.findElement(By.id("addToCart")).click();
		driver.findElement(By.id("addToCart")).click();
		
//		driver.findElement(By.linkText("/cart-details")).click();
//		driver.findElement(By.xpath("//*[@id='cart']")).click();


		
		
		driver.get("http://localhost:4200/checkout");
		
		//test billing address
		
		driver.findElement(By.id("shippingAddressStreet")).sendKeys("Walter Rathenau Straﬂe-30");
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

		
		driver.findElement(By.id("billingAddressStreet")).sendKeys("Walter Rathenau Straﬂe-30");
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
		
		driver.get("http://localhost:4200/products");
		driver.findElement(By.id("usrLogout-button")).click();
		
  }
  
  
  
  @Test
  public void dashboardTest() {
	  
	    driver.get("http://localhost:4200/admin-login");
		driver.findElement(By.id("usr")).sendKeys("john");
		driver.findElement(By.id("pwd")).sendKeys("admin@123");
		
		driver.get("http://localhost:4200/dashboard");
		//maximize the window
		driver.manage().window().maximize();
		
		//provide implicit wait
		driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
		String tableHeader = driver.findElement(By.xpath("//*[@id=\"table\"]/thead/tr")).getText();
		System.out.println(tableHeader);
		
		String tableData1 = driver.findElement(By.xpath("//*[@id='table']/tbody")).getText();
		System.out.println(tableData1);
		
		driver.findElement(By.id("addProduct")).click();
		driver.findElement(By.id("addModalLabel")).click();
		driver.findElement(By.id("sku1")).sendKeys("sku");
		driver.findElement(By.id("name1")).sendKeys("name");
		driver.findElement(By.id("description1")).sendKeys("description");
		driver.findElement(By.id("unitPrice1")).sendKeys("19.99");
		driver.findElement(By.id("imageUrl1")).sendKeys("imageUrl");
		driver.findElement(By.id("active1")).sendKeys("true");
		driver.findElement(By.id("unitInStock1")).sendKeys("unitInStock");
		driver.findElement(By.id("category1")).sendKeys("{\"id\":1,\"productCategory\":\"Fresh\"}");
		driver.findElement(By.id("addProduct1")).submit();
		

	  
  }
  
  
  

  
  @AfterTest
  public void afterTest() {
	  driver.quit();
  }
}

package Foodbox.example.Foodbox;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import Foodbox.example.Foodbox.entity.AdminLogin;
import Foodbox.example.Foodbox.repository.LoginRepository;
import Foodbox.example.Foodbox.service.LoginService;
@SpringBootTest
public class AdminLoginTest {
	
//	Long id, String adminName, String role, String password, String firstName, String lastName,
//	String email
	@Autowired
	private LoginService loginService;
	
	@MockBean
	private LoginRepository loginRepo;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		System.out.println("This is executed before all tests");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		System.out.println("This is executed after all tests");
	}

	@BeforeEach
	void setUp() throws Exception {
		System.out.println("This is executed before each test case");
		AdminLogin user = new AdminLogin(1L, "user1", "User",  "password", "firstName",  "lastName","firstName.lastName@gmail.com");
		
		when(loginRepo.save(user)).thenReturn(user);
	
	}
	
	
	@Test
	public void saveTestLogin() {
		AdminLogin user = new AdminLogin("user1", "User",  "password", "firstName",  "lastName","firstName.lastName@gmail.com");
		when(loginRepo.save(user)).thenReturn(user);
		assertEquals(user,loginService.save(user));
		
	}
	
	@Test
	public void  findAllTestLogin() {
		AdminLogin user1 = new AdminLogin("user1", "User",  "password", "firstName",  "lastName","firstName.lastName@gmail.com");
		AdminLogin user2 = new AdminLogin("user2", "User",  "password", "firstName",  "lastName","firstName.lastName@gmail.com");
		List<AdminLogin> users=new ArrayList<AdminLogin>();
		users.add(user2);
		users.add(user1);
		when(loginRepo.findAll()).thenReturn(users);
		assertEquals(2,loginService.findAll().size());
		
	}
	
	
	
	@Test
	public void search() {
		AdminLogin user1 = new AdminLogin("user1", "User",  "password", "firstName",  "lastName","firstName.lastName@gmail.com");
		AdminLogin user2 = new AdminLogin("user2", "User",  "password", "firstName",  "lastName","firstName.lastName@gmail.com");
		List<AdminLogin> users=new ArrayList<AdminLogin>();
		users.add(user2);
		users.add(user1);
		when(loginRepo.search("user1", "User")).thenReturn(user1);
		assertEquals(user1,loginService.search("user1", "User"));
	}

	@AfterEach
	void tearDown() throws Exception {
		
	}

}

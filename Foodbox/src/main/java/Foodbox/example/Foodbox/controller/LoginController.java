package Foodbox.example.Foodbox.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Foodbox.example.Foodbox.entity.AdminLogin;
import Foodbox.example.Foodbox.service.LoginService;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class LoginController {
	
	@Autowired
	private LoginService loginService;

	@PostMapping("/newUSer")
	public AdminLogin createNewUser(@RequestBody AdminLogin theUser ) {
		return this.loginService.save(theUser);
	}
	
	
	// login portal
	@GetMapping("/login")
	public List<AdminLogin> getLoginCredential() {
		return this.loginService.findAll();
	}
	
	@GetMapping("/login/{username}")
	public AdminLogin getUser(@PathVariable("username") String keyword) {
		String role="User";
		return this.loginService.search(keyword,role);
	}

	@GetMapping("/login/{keyword}/{role}")
	public AdminLogin getAdmin(@PathVariable("keyword") String keyword,@PathVariable("role") String role) {
		return this.loginService.search(keyword,role);
	}

	@PostMapping("/login/update")
	public void updateLogin(@RequestBody AdminLogin user) {
		this.loginService.save(user);
	}

	@GetMapping("/login/adminName")
	public List<String> getLoginadminNames() {
		List<AdminLogin> logins = this.loginService.findAll();
		List<String> adminNames = new ArrayList<>();
		for (AdminLogin login : logins) {
			if(login.getRole().equals("admin"))
				adminNames.add(login.getAdminName());
		}

		return adminNames;
	}
	@GetMapping("/login/userName")
	public List<String> getLoginUserNames() {
		List<AdminLogin> logins = this.loginService.findAll();
		List<String> adminNames = new ArrayList<>();
		for (AdminLogin login : logins) {
			if(login.getRole().equals("User"))
				adminNames.add(login.getAdminName());
		}

		return adminNames;
	}

}

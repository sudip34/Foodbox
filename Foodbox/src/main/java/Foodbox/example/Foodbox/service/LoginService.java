package Foodbox.example.Foodbox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Foodbox.example.Foodbox.entity.AdminLogin;
import Foodbox.example.Foodbox.repository.LoginRepository;


@Service
public class LoginService {
	
	@Autowired
	private LoginRepository loginRepository;
	
	
	public AdminLogin save( AdminLogin theUser ) {
		return this.loginRepository.save(theUser);
	}
	
	public List<AdminLogin> findAll() {
		return this.loginRepository.findAll();
	}
	
	public AdminLogin search( String keyword, String role) {
		return this.loginRepository.search(keyword,role);
	}
	
	

}

package Foodbox.example.Foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Foodbox.example.Foodbox.entity.Country;
import Foodbox.example.Foodbox.repository.CountryRepository;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api")	
public class CountryController {
	@Autowired
	private CountryRepository countryRepository;
	
	@GetMapping("/countries")
	public List<Country> getCountries(){
		return this.countryRepository.findAll();
	}

}

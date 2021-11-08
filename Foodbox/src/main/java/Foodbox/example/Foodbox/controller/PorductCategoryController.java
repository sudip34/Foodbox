package Foodbox.example.Foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Foodbox.example.Foodbox.entity.ProductCategory;
import Foodbox.example.Foodbox.service.ProductCategoryService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class PorductCategoryController {
	
	@Autowired
	private ProductCategoryService productCatagoryService;
	
	@GetMapping("/products-category")
	public List<ProductCategory> getAllProductCategory() {
		return this.productCatagoryService.getAllProductCategory();
	}
	@PostMapping("/products-category/add")
	public ProductCategory addProductCategory(@RequestBody ProductCategory theProductCategory) {
		return this.productCatagoryService.save(theProductCategory);
	}

}

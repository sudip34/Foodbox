package Foodbox.example.Foodbox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import Foodbox.example.Foodbox.entity.ProductCategory;
import Foodbox.example.Foodbox.repository.ProductCategoryRepository;

@Service
public class ProductCategoryService {
	
	@Autowired
	private ProductCategoryRepository productCatagoryReop;
	
	public List<ProductCategory> getAllProductCategory() {
		return this.productCatagoryReop.findAll();
	}
	
	public ProductCategory save(@RequestBody ProductCategory theProductCategory) {
		return this.productCatagoryReop.save(theProductCategory);
	}

}

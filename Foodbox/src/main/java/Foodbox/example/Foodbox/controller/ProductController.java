package Foodbox.example.Foodbox.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Foodbox.example.Foodbox.entity.Product;
import Foodbox.example.Foodbox.entity.ProductCategory;
import Foodbox.example.Foodbox.repository.ProductCategoryRepository;
import Foodbox.example.Foodbox.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ProductController {

	@Autowired
	private ProductService productService;
	

	

	@Autowired
	private ProductCategoryRepository productCatagoryReop;

	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return this.productService.findAllProducts();
	}
	
//	http://localhost:8080/api/products/category/{categoryId}?sortField=unitPrice&sortDir=ASC
	@GetMapping("/products/category/{categoryId}")
	public List<Product> getProductsSort(@PathVariable("categoryId") int categoryId,
            @RequestParam("sortField") String sortField, @RequestParam("sortDir") String sortDirection) {

		return this.productService.findAllProductsWithSort(categoryId,sortField, sortDirection);

	}
	


	@GetMapping("/get-products-category")
	public List<ProductCategory> getAllProductCategory() {
		return this.productCatagoryReop.findAll();
	}

	

	@GetMapping("/products/{id}")
	public Optional<Product> getProduct(@PathVariable("id") Long id) {
		return this.productService.findById(id);
	}
	
	@PostMapping("/products/add")
	public void addToProduct(@RequestBody Product newProduct) {
		this.productService.save(newProduct);
	}

	@PutMapping("/products/update")
	public void updateProduct(@RequestBody Product theProduct) {
		this.productService.saveToUpdate(theProduct);
	}
	
	@GetMapping("/products/activate/{id}")
	public Product activateProduct(@PathVariable("id") Long id) {
		Product product=this.productService.findById(id).get();
		if(product!=null) {
			product.setActive(true);
		}
		return this.productService.save(product);

	}
	
	@GetMapping("/products/deactivate/{id}")
	public Product deactivateProduct(@PathVariable("id") Long id) {
		Product product=this.productService.findById(id).get();
		if(product!=null) {
			product.setActive(false);
		}
		return this.productService.save(product);

	}
	


	@DeleteMapping("/products/delete/{id}")
	public void deleteProduct(@PathVariable("id") Long id) {
		this.productService.deleteById(id);

	}
	
	
//	http://localhost:8080/api/products/search?name=${theKeyword}
//	@GetMapping("/products/search/{name1}")
//	public Page<Product>FindByName(@PathVariable("name1") String name){
//		
//		return this.productService.FindByNameContaining(name);
//		
//	}
	
	
//=================================sort======================================
	
//  http://localhost:8080/api/products/search/name?sortField=unitPrice&sortDir=ASC
	@GetMapping("/products/search/{name}")
	public List<Product>FindByNameContainingWithSort(@PathVariable("name") String name, 
            @RequestParam("sortField") String sortField, @RequestParam("sortDir") String sortDirection){
		
		return this.productService.FindByNameContainingWithSort(name,  sortField, sortDirection);
		
	}
	





}

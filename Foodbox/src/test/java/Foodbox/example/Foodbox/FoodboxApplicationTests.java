package Foodbox.example.Foodbox;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Sort;

import Foodbox.example.Foodbox.entity.Product;
import Foodbox.example.Foodbox.entity.ProductCategory;
import Foodbox.example.Foodbox.repository.ProductCategoryRepository;
import Foodbox.example.Foodbox.repository.ProductRepository;
import Foodbox.example.Foodbox.service.ProductCategoryService;
import Foodbox.example.Foodbox.service.ProductService;

			

@SpringBootTest
class FoodboxApplicationTests {
	
	@Autowired
	private ProductService service;
	
	@MockBean
	private ProductRepository repo;
	
	
	@Autowired
	private ProductCategoryService categoryService;
	
	@MockBean
	private ProductCategoryRepository categoryRepo;
	
	
	@Test
	public void findAllProductsTest() {
		 when(repo.findAll()).thenReturn( Stream.of( new Product(23L,"bka","product1","good", 19.02 , "url", true, 10, new ProductCategory(1,"category1")),
				new Product(24L,"bka","product2","good", 19.02 , "url", true, 20, new ProductCategory(1,"category1"))).collect(Collectors.toList()));
		
		assertEquals(2,service.findAllProducts().size());
	}
	
	
	

	
	@Test
	public void FindByNameContainingTest() {
		
		String name="product";
		String sortField="unitPrice";
		String sortDirection="ASC";
		Sort sort = Sort.by(Sort.Direction.ASC, sortField);
		Product product1 = new Product(23L,"bka","product1","good", 19.02 , "url", true, 10, new ProductCategory(1,"category1"));
		Product product2 = new Product(24L,"bka","product2","good", 19.01 , "url", true, 20, new ProductCategory(1,"category1"));
		List<Product> productList=new ArrayList<Product>();
		productList.add(product1);
		productList.add(product2);
		when(repo.findByNameContaining(name, sort)).thenReturn(productList);
		assertEquals(2,service.FindByNameContainingWithSort(name,sortField,sortDirection).size());
	}
	

	
	@Test
	public void saveTest() {
		Product product=new Product(25L,"bka","product2","good", 19.02 , "url1", true, 10, new ProductCategory(1,"category1"));
		when(repo.save(product)).thenReturn(product);
		assertEquals(product,service.save(product));
	}
	
	
	@Test
	public void deleteByIdTest() {
		new Product(25L,"bka","product2","good", 19.02 , "url1", true, 10, new ProductCategory(1,"category1"));
		service.deleteById(25L);
		verify(repo,times(1)).deleteById(25L);
	
	}
	
//	==============================productCategory=============================
	
	@Test
	public void getAllProductCategoryTest() {	
		ProductCategory category1 = new ProductCategory(1,"category1");
		ProductCategory category2 = new ProductCategory(2,"category2");
		List<ProductCategory> categoryList=new ArrayList<ProductCategory>();
		categoryList.add(category2);
		categoryList.add(category1);
		when(categoryRepo.findAll()).thenReturn(categoryList);
		assertEquals(2, categoryService.getAllProductCategory().size());	
	}
	
	@Test
	public void saveCategoryTest() {
		ProductCategory category1 = new ProductCategory(1,"category1");
		when(categoryRepo.save(category1)).thenReturn(category1);
		assertEquals(category1, categoryService.save(category1));
	}

	@Test
	void contextLoads() {
	}

}

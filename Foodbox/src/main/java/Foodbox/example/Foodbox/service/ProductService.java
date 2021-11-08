package Foodbox.example.Foodbox.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import Foodbox.example.Foodbox.entity.Product;
import Foodbox.example.Foodbox.repository.ProductRepository;



@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepo;

	public List<Product> findAllProducts() {
		return this.productRepo.findAll();
	}


	public List<Product> findAllProductsWithSort(int categoryId,  String sortField, String sortDirection) {
			
		Sort sort = sortDirection.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortField).ascending() :
			Sort.by(sortField).descending();
		
		if(categoryId !=0) {
//			return this.productRepo.findAllByCategoryId(categoryId, sort);
			return this.productRepo.findAllByCategoryId(categoryId, sort);
		}else {
			return this.productRepo.findAll(sort);
		}

	}
	

	
	

	// write the putMapping method for to set active false -to update it;

	public void updateProduct(Product theProduct) {
		this.productRepo.save(theProduct);

	}

	public Optional<Product> findById(Long id) {
		return this.productRepo.findById(id);
	}

	public Product save(Product newProduct) {
		return this.productRepo.save(newProduct);
	}

	public void saveToUpdate(Product theProduct) {
		this.productRepo.save(theProduct);
	}

	public void deleteById(Long id) {
		this.productRepo.deleteById(id);

	}

	
//search a product with sort only
	
	public List<Product> FindByNameContainingWithSort(String name,String sortField, String sortDirection){
		
		Sort sort = sortDirection.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortField).ascending() :
		Sort.by(sortField).descending();
		
		return this.productRepo.findByNameContaining(name, sort);
		
	}
	


}

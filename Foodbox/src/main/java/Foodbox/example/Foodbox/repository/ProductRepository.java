package Foodbox.example.Foodbox.repository;


import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Foodbox.example.Foodbox.entity.Product;
	

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	
//	List<Product> findByNameContaining(String name);
	List<Product> findByNameContaining(String title, Sort sort);

	List<Product> findAllByCategoryId(int categoryId, Sort sort);

	
	


}

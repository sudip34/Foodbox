package Foodbox.example.Foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Foodbox.example.Foodbox.entity.ProductCategory;

	




@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {

}

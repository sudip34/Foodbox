package Foodbox.example.Foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Foodbox.example.Foodbox.entity.ProductCategory;

	

//because we don't want to take the defaults so we,r adding  
// @RepositoryRestResource(collectionResource, path) without s at the end

//@RepositoryRestResource(collectionResourceRel="productCategory", path="product-category")
@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {

}

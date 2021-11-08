package Foodbox.example.Foodbox.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ProductCategory {
	
	@Id
	private int id ;
	
	
//	@Column(name="category_name")
	private String productCategory;
	
	
	public ProductCategory(int id, String categoryName) {
		this.id = id;
		this.productCategory = categoryName;
		
	}
	
	

	public ProductCategory() {
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getproductCategory() {
		return productCategory;
	}

	public void setproductCategory(String categoryName) {
		this.productCategory = categoryName;
	}



	@Override
	public String toString() {
		return "ProductCategory [id=" + id + ", productCategory=" + productCategory + "]";
	}

	

}

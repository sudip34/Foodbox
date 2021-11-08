package Foodbox.example.Foodbox.entity;



import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "product")
public class Product {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "sku")
	private String sku;

	@Column(length=128, nullable=false, unique=true)
	private String name;

	
	private String description;

	
	private double unitPrice;

	
	private String imageUrl;

	
	private boolean active;

	
	private int unitInStock;

	
	@CreationTimestamp // Hibernate annotation for automated time-stamps-creations
	private Date dateCreated;

	
	@UpdateTimestamp // Hibernate annotation for automate update timestamps
	@JsonIgnore
	private Date lastUpdated;

	
	@ManyToOne( optional = false)
	@JoinColumn(name = "category_id")
	private ProductCategory category;

	
	
	public Product() {
		super();
	}
	
	


	public Product(Long id, String sku, String name, String description, double unitPrice, String imageUrl,
			boolean active, int unitInStock, Date dateCreated, Date lastUpdated, ProductCategory category) {
		super();
		this.id = id;
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitPrice = unitPrice;
		this.imageUrl = imageUrl;
		this.active = active;
		this.unitInStock = unitInStock;
		this.dateCreated = dateCreated;
		this.lastUpdated = lastUpdated;
		this.category = category;
	}




	public Product(Long id, String sku, String name, String description, double unitPrice, String imageUrl,
			boolean active, int unitInStock, ProductCategory category) {
		super();
		this.id = id;
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitPrice = unitPrice;
		this.imageUrl = imageUrl;
		this.active = active;
		this.unitInStock = unitInStock;
		this.category = category;
	}




	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getSku() {
		return sku;
	}


	public void setSku(String sku) {
		this.sku = sku;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public double getUnitPrice() {
		return unitPrice;
	}


	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}


	public String getImageUrl() {
		return imageUrl;
	}


	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}


	public boolean isActive() {
		return active;
	}


	public void setActive(boolean active) {
		this.active = active;
	}


	public int getUnitInStock() {
		return unitInStock;
	}


	public void setUnitInStock(int unitInStock) {
		this.unitInStock = unitInStock;
	}


	public Date getDateCreated() {
		return dateCreated;
	}


	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}


	public Date getLastUpdated() {
		return lastUpdated;
	}


	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}


	public ProductCategory getCategory() {
		return category;
	}


	public void setCategory(ProductCategory category) {
		this.category = category;
	}


	@Override
	public String toString() {
		return "Product [id=" + id + ", sku=" + sku + ", name=" + name + ", description=" + description + ", unitPrice="
				+ unitPrice + ", imageUrl=" + imageUrl + ", active=" + active + ", unitInStock=" + unitInStock
				+ ", dateCreated=" + dateCreated + ", lastUpdated=" + lastUpdated + ", category=" + category + "]";
	}

	

}

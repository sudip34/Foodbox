import { Product } from './../../common/Product';
import { ProductCategory } from './../../common/product-category';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productCategories:ProductCategory[]=[];
  product: Product = new Product();
  products: Product[] = [];
  category:ProductCategory=new ProductCategory();

  
  productCategoryToAdd ={
    "id":10000,
    "productCategory": ''
  }
  productToadd ={
    id:'-1',
    sku:'',
    name:"",
    description:"",
    unitPrice:'',
    imageUrl:"",
    active:true,
    unitInStock: 0,
    category:{
      "id": 0,
      "productCategory":''
    }
  };

  productsToUpdate ={
    id:'',
    sku:'',
    name:"",
    description:"",
    unitPrice:'',
    imageUrl:"",
    active:true,
    unitInStock:0,
    category:{
      "id": 0,
      "productCategory":''
    }
  };
  
  

  constructor( private productService: ProductServiceService,
              private loginservice:UserLoginService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.getAllProducts();
      this.getProductCategories();
    });  

  }


  getProductCategories(){
    this.productService.getProductCategories().subscribe((data:any) =>this.productCategories=data);
    console.log(this.productCategories);
  }


  getAllProducts() {
    this.productService.getProductsList().subscribe(
      data=>{this.products=data;
      }
    )

    
  }
 

  addProductCategory(theProductCategory:ProductCategory){
    this.productCategoryToAdd=theProductCategory;
    console.log(this.productCategoryToAdd);
  }

  addCategory(formToken1:NgForm){
    console.log(formToken1.value);
    this.productService.createProductCategory(formToken1.value).subscribe(
      result =>{this.productCategoryToAdd=result;
                console.log(result);
                this.ngOnInit();
              },
              err=>{
                console.log(err);
              }
    );
  }





  addProduct(theProduct:Product){
    this.productToadd=theProduct;
  }
  // addProduct(theProduct:Product){
  //   this.productsToUpdate=theProduct;
  // }

  add(formToken:NgForm){
    let product1:Product=new Product();
    product1.category=JSON.parse(formToken.value.category);
     console.log(product1.category);
     product1.sku=formToken.value.sku;
     product1.name=formToken.value.name;
     product1.description=formToken.value.description;
     product1.imageUrl=formToken.value.imageUrl;
     product1.unitInStock=formToken.value.unitInStock;
     product1.unitPrice=formToken.value.unitPrice;
     product1.dateCreated=new Date();
     product1.active=formToken.value.active;

     
     console.log(product1); 
 
    console.log(formToken.value);

    this.productService.createProduct(product1).subscribe(
      result =>{this.product=result;
                console.log(result);
                this.ngOnInit();
              },
              err=>{
                console.log(err);
              }
    );
  }

  update(formToken:NgForm){
    console.log(formToken.value);
    this.productService.updateProduct(formToken.value).subscribe(
      resp =>{
        console.log(resp);
        formToken.reset();
        this.getAllProducts();
      },
      err=>{
        console.log(err);
      }
    );

  }

  activate(tempProduct:Product){
   
    this.productService.activeProduct(+tempProduct.id).subscribe(
      resp =>{
        console.log(resp,"Product id activated");
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      }
    );

  }

  Dectivate(tempProduct:Product){
    this.productService.deactiveProduct(+tempProduct.id).subscribe(
      resp =>{
        console.log(resp,"Product id deactivated");
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      }
    );

  }

  getDeleted(tempProduct:Product){
    console.log("Clicked to delete " );
      this.productService.deleteProduct(+tempProduct.id).subscribe(
        resp=>{
          console.log(resp, "Item is deleted")
          this.ngOnInit();
          
        },
          err=>console.log(err)  
      );
    
  }

  edit(product:Product){
    this.productsToUpdate=product;
  }

  logout(){

     this.loginservice.logOut();
     this.router.navigate(['admin-login']);

  }








  
 




}



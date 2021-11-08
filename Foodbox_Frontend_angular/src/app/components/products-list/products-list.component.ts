import { CartServicesService } from './../../services/cart-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/Product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { CartItem } from 'src/app/common/cart-item';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[]=[]
  currentCategoryId: number=0;
  sortDirection:string='ASC';
  searchMode:boolean=false;
  loggedin:boolean=false;


  page:number=1;
  totalElements:number=0;
  previousCategoryId:number=0;
  previousKeyword:string=(null)!;

  constructor(private productService:ProductServiceService,
              private route:ActivatedRoute,
              private userLoginService:UserLoginService,
              private router:Router,
              private cartService:CartServicesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( ()=> this.listProducts());
    this.userLoginService.isUserLoggeIn();
    this.isLoogedIn();
    console.log(this.products);
  }

  listProducts(){
    this.searchMode=this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
       this.handleSearchProducts();
    }else {
       this.getAllProducts();
    }
  }

  getAllProducts() {
    //check if "id" parameter is avaialble
    const hasCategoryId:boolean = this.route.snapshot.paramMap.has("id")
    if(hasCategoryId ){
      
      // get the "id " param string. Convert in to number wtih "+"
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;//Number(this.route.snapshot.paramMap.get('id'));
    }

    this.productService.getProductList(this.currentCategoryId,this.sortDirection).subscribe(
      
       data=>{this.products=data;
        this.totalElements=data.length;
     }
    );
   }


 
    


   






   handleSearchProducts(){
     const theKeyword: string = this.route.snapshot.paramMap.get('keyword')||"";

     //search for the product
     this.productService.searchProducts(theKeyword,this.sortDirection).subscribe((data: any)=>{
      this.products=data});

   }


 
  addToCart(theProduct:Product){


    if(this.userLoginService.isUserLoggeIn()){

      console.log(this.userLoginService.isUserLoggeIn());
      console.log(`Adding to cart:${theProduct.name}, ${theProduct.unitPrice}`);
      //create a instance of CartItem
      this.loggedin=true;
      const theCartItem: CartItem =new CartItem(theProduct);
      this.cartService.addToCart(theCartItem);

    }else{
      this.loggedin=false;
      this.router.navigate(['user-login']);

    }

  }


  logout(){
    this.userLoginService.logOutuser();
    this.cartService.resetCart();
    alert('you are logged out');
    this.router.navigate(['user-login']);
    this.ngOnInit();
  }

  sortIncresing(){
    this.sortDirection='ASC';
    this.ngOnInit();
  }
  sortDecresing(){
    this.sortDirection='DSC';
    this.ngOnInit();
  }
  isLoogedIn(){
    if(this.userLoginService.isUserLoggeIn()){
      this.loggedin=true;
    }
  }

  
}

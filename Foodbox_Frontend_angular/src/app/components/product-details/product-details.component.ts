import { CartServicesService } from './../../services/cart-services.service';
import { CartItem } from './../../common/cart-item';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/Product';
import { UserLoginService } from 'src/app/services/user-login.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product=new Product();

  constructor(private route:ActivatedRoute, private productService:ProductServiceService,
              private userLoginService:UserLoginService,private router:Router,
              private cartService: CartServicesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>this.getProductDetails());
  }

  getProductDetails(){

    //get the product id form param string
    const theProdcutId:number=+this.route.snapshot.paramMap.get('id');

    return this.productService.getTheProduct(theProdcutId).subscribe((data:any)=>this.product=data);


  }

  addToCart(theProduct:Product){
    if(this.userLoginService.isUserLoggeIn()){

      console.log(this.userLoginService.isUserLoggeIn());
      //create a instance of CartItem
      const theCartItem: CartItem =new CartItem(theProduct);
      this.cartService.addToCart(theCartItem);

    }else{
      this.router.navigate(['user-login']);

    }
    
  }

}

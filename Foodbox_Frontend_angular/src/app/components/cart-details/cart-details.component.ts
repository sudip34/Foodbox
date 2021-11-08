import { CartServicesService } from './../../services/cart-services.service';
import { CartItem } from 'src/app/common/cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems:CartItem[]=[];
  totalPrice:number=0.00;
  totalQuantity:number=0;

  constructor(private cartService: CartServicesService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails(){
    //get a handler to the cart item
    this.cartItems=this.cartService.cartItems;

    //subscrib to the cart's total price
    this.cartService.totalPrice.subscribe(data =>this.totalPrice=data);

    //subscribe to the cart's total quantity
    this.cartService.totalQuantity.subscribe(data =>this.totalQuantity=data);

    //compute cart's total price and totalQuantity
    this.cartService.computeCartTotals();

  }

  incrementQuantity(theCartItem:CartItem){
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem:CartItem){
    this.cartService.removeFromTheCart(theCartItem);
  }

  remove(theCartItem:CartItem){
    this.cartService.remove(theCartItem);
  }


}

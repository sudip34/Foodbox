import { CartItem } from './../common/cart-item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  cartItems:CartItem[]=[];

  //subject is a subclass of Obserable. it will publish the event to the subscriber.
  totalPrice: Subject<number> =new Subject<number>();
  totalQuantity: Subject<number> =new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){

    //check if we already have the item in cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem:CartItem =undefined!;


    if(this.cartItems.length>0){
      
    //find the item in the cart based on the item id
      for(let tempCartItem of this.cartItems){
        if(tempCartItem.id === theCartItem.id){
          existingCartItem=tempCartItem;
          break;
        }
      }

    //check if we have found it

    alreadyExistsInCart = (existingCartItem!=undefined);
    
    }

    if(alreadyExistsInCart){
      //increment the quantity
      existingCartItem.quantity++;
    }else{
      //jsut add the item in to the array
      this.cartItems.push(theCartItem);
    }

    //compute the cart total price and total quantity

    this.computeCartTotals();

  }

  removeFromTheCart(theCartItem:CartItem){
    theCartItem.quantity--;
    if(theCartItem.quantity==0){
      this.remove(theCartItem);
    }else{
      this.computeCartTotals();
    }
  }
  remove(theCartItem: CartItem) {

    // get the index of the item in the array
    const itemIndex =this.cartItems.findIndex( tempCartItem => tempCartItem.id==theCartItem.id);

    //if found, remove the item from the array at the given index
    if(itemIndex>-1){
      //splice to remove the item form the array (index, number of items to be removed fromt this index)
      this.cartItems.splice(itemIndex,1); 
      this.computeCartTotals();
    }

  }


  computeCartTotals() {
   
    let totalPriceValue:number=0;
    let totalQuantityValue:number=0;

    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity*currentCartItem.unitePrice;
      totalQuantityValue += currentCartItem.quantity;
    }
    
    //publish the new value for the total price and quantity with .next() of subjet
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);


  }


  resetCart() {
    this.cartItems = [];
    this.computeCartTotals();
  }

}

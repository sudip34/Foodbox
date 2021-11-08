import { Router } from '@angular/router';
import { CartServicesService } from './../../services/cart-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  totalPrice:number=0.00;
  totalQuantity:number=0;

  constructor(private cartService:CartServicesService,
              private router:Router) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    // subscribe to the cart totalPrice
      this.cartService.totalPrice.subscribe(data => this.totalPrice=data);

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity=data);

  }

  inToCart(){
    this.router.navigateByUrl("/cart-details")
  }

}

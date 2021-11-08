import { CartServicesService } from './../../services/cart-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cartservice: CartServicesService) { }

  ngOnInit(): void {
    this.resetTheCart();
  }

  resetTheCart() {
    this.cartservice.resetCart();
  }

}

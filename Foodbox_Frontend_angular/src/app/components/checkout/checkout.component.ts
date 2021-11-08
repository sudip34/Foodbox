import { Login } from './../../common/login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Country } from 'src/app/common/country';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { State } from 'src/app/common/state';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { FoodboxFormService } from 'src/app/services/foodbox-form.service';
import { UserLoginService } from 'src/app/services/user-login.service';
import { MyFromValidator } from 'src/app/validators/my-from-validator';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup:FormGroup;
  cartItems:CartItem[]=[];
  totalPrice:number=0.00;
  totalQuantity:number=0;
  craditCardYears:number[]=[];
  craditCardMonths:number[]=[];
  login1!:Login;
  username:string='';
  // login:Login=new Login();

  countries:Country[]=[];
  states:State[]=[];

  shippingAddressStates:State[]=[];
  billingAddressStates:State[]=[];

  constructor(private formBuilder:FormBuilder,
    private foodboxFormService:FoodboxFormService,
    private cartService:CartServicesService,
    private checkoutService:CheckoutService,
    private router:Router,
    private loginService:UserLoginService) { }




  ngOnInit(): void {

    if(this.loginService.isUserLoggeIn){
      this.username=sessionStorage.getItem('userName');
      console.log(this.username);
    }
    this.reviewCartDetails();

    this.checkoutFormGroup=this.formBuilder.group({
      // customer:this.formBuilder.group({
      //   firstName:new FormControl("",[Validators.required,Validators.minLength(2),MyFromValidator.notOnlyWhitespace]),
      //   lastName:new FormControl("",[Validators.required,Validators.minLength(2),MyFromValidator.notOnlyWhitespace]),
      //   email:new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),//works for anuva@gamil.com
      // }),
      shippingAddress:this.formBuilder.group({
        street:new FormControl("",[Validators.required,MyFromValidator.notOnlyWhitespace]),
        city:new FormControl("",[Validators.required,MyFromValidator.notOnlyWhitespace]),
        state:new FormControl("",[Validators.required]),
        country:new FormControl("",[Validators.required]),
        zipCode:new FormControl("",[Validators.required,MyFromValidator.notOnlyWhitespace]),
      }),
      billingAddress:this.formBuilder.group({
        street:new FormControl("",[Validators.required,MyFromValidator.notOnlyWhitespace]),
        city:new FormControl("",[Validators.required,MyFromValidator.notOnlyWhitespace]),
        state:new FormControl("",[Validators.required]),
        country:new FormControl("",[Validators.required]),
        zipCode:new FormControl("",[Validators.required,MyFromValidator.notOnlyWhitespace]),
      }),
      craditCard:this.formBuilder.group({
        cardType:new FormControl("",[Validators.required]),
        nameOnCard:new FormControl("",[Validators.required,Validators.minLength(2),MyFromValidator.notOnlyWhitespace]),
        cardNumber:new FormControl("",[Validators.required,Validators.pattern('[0-9]{16}')]),
        securityCode:new FormControl("",[Validators.required,Validators.pattern('[0-9]{3}')]),
        expiarationMonth:new FormControl("",[Validators.required]),
        expiarationYear:new FormControl("",[Validators.required]),
      })
    });

    

    // populate creditcard months
    const startMonth: number = new Date().getMonth() + 1;
    console.log("startMonth: " + startMonth);

    this.foodboxFormService.getCraditCardMonths(startMonth).subscribe(
      data => {
        console.log("Retrieved credit card months: " + JSON.stringify(data));
        this.craditCardMonths = data;
      }
    );

    // populate creditcard years
    this.foodboxFormService.getCraditCardYars().subscribe(
      data => {
        console.log("Retrieved credit card years: " + JSON.stringify(data));
        this.craditCardYears = data;
      }
    );

    // populate counties
    this.foodboxFormService.getCountries().subscribe(
      data =>{
        console.log("Retrieved countries: " + JSON.stringify(data))
        this.countries=data;}
    );



    this.getTheUser();
    
  }

  getTheUser(){
    this.loginService.getTheUser(this.username).subscribe(data=>{this.login1=data;
      console.log("Retrieved customer: " + JSON.stringify(data));
    });
  }

     

  onSubmit(){

    console.log("Handling the submit button");

    if(this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

    //set up order with a new instance of order
    let order = new Order();
    order.totalPrice=this.totalPrice;
    order.totalQuantity=this.totalQuantity;

    //setUp the user into order
    if(this.loginService.isUserLoggeIn){ 
      order.customer=JSON.parse(JSON.stringify(this.login1));
      console.log(order.customer);
    }

    // get cart items
    const cartItems = this.cartService.cartItems;
    
   

    // creation of orderItems
    let orderItems:OrderItem[]=cartItems.map(tempCartItem =>new OrderItem(tempCartItem));

    //set up purchase with new instance
    let purchase = new Purchase();

    // populate purchase - shipping address
    purchase.shippingAddress=this.checkoutFormGroup.controls['shippingAddress'].value;
    const shippingState:State = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
    const shippingCountry:Country = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
    purchase.shippingAddress.state=shippingState.name;
    purchase.shippingAddress.country=shippingCountry.name;
    console.log(purchase.shippingAddress.state);
    console.log(purchase.shippingAddress.country);

    // populate purchase - billing address
    purchase.billingAddress=this.checkoutFormGroup.controls['billingAddress'].value;
    const billingState:State = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
    const billingCountry:Country = JSON.parse(JSON.stringify(purchase.billingAddress.country));

    console.log("checking the JSON parse of JSON srtingy "+ billingCountry);

    purchase.billingAddress.state=billingState.name;
    purchase.billingAddress.country=billingCountry.name;
    console.log(purchase.billingAddress.state);
    console.log(purchase.billingAddress.country);

    // populate purchase - order and orderItems
    purchase.order=order;
    purchase.orderItems=orderItems;

    //call the REST api via the CheckoutService
    this.checkoutService.placeOrder(purchase).subscribe(
      {
        //next: success/happy
        next:response =>{
          alert(`your order has been received. \nOrder tracking number:${response.orderTrackingNumber}`)
          //resset the cart
          this.resetCart();
        },
        error:err=>{
          alert(`There was an error:${err.message}`);
        }
      }
    );


    console.log("Handling the submit button");
    // console.log(this.checkoutFormGroup.get('customer')!.value);
    // console.log("The Email address is "+this.checkoutFormGroup.get('customer')!.value.email);
    console.log(this.checkoutFormGroup.get('shippingAddress')!.value);
    console.log(this.checkoutFormGroup.get('billingAddress')!.value);
  }
  resetCart() {
    //reset cart data 
    this.cartService.cartItems=[];
    this.cartService.totalQuantity.next(0);
    this.cartService.totalPrice.next(0);

    //reset the form
    this.checkoutFormGroup.reset();
    //navigate back to the products page with the router
    this.router.navigateByUrl("/products");

  }

  // get firstName(){return this.checkoutFormGroup.get('customer.firstName');  }
  // get lastName(){return this.checkoutFormGroup.get('customer.lastName');}
  // get email(){return this.checkoutFormGroup.get('customer.email');}

  get shippingAddressStreet(){return this.checkoutFormGroup.get('shippingAddress.street');}
  get shippingAddressCity(){return this.checkoutFormGroup.get('shippingAddress.city');}
  get shippingAddressState(){return this.checkoutFormGroup.get('shippingAddress.state');}
  get shippingAddressCountry(){return this.checkoutFormGroup.get('shippingAddress.country');}
  get shippingAddressZip(){return this.checkoutFormGroup.get('shippingAddress.zipCode');}


  get billingAddressStreet(){return this.checkoutFormGroup.get('billingAddress.street');}
  get billingAddressCity(){return this.checkoutFormGroup.get('billingAddress.city');}
  get billingAddressState(){return this.checkoutFormGroup.get('billingAddress.state');}
  get billingAddressCountry(){return this.checkoutFormGroup.get('billingAddress.country');}
  get billingAddressZip(){return this.checkoutFormGroup.get('billingAddress.zipCode');}


  get craditCardType(){return this.checkoutFormGroup.get('craditCard.cardType');}
  get craditCardNameOnCard(){return this.checkoutFormGroup.get('craditCard.nameOnCard');}
  get craditCardNumber(){return this.checkoutFormGroup.get('craditCard.cardNumber');}
  get craditCardSecurityCode(){return this.checkoutFormGroup.get('craditCard.securityCode');}
  get craditCardExpiarationMonth(){return this.checkoutFormGroup.get('craditCard.expiarationMonth');}
  get craditCardExpiarationYear(){return this.checkoutFormGroup.get('craditCard.expiarationYear');}
 




  



  

  copyShippingAddresstoBillingAddress(event:any){

    if(event.target.checked){
      this.checkoutFormGroup.controls.billingAddress
         .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
         this.billingAddressStates=this.shippingAddressStates;
    }else{
      this.checkoutFormGroup.controls.billingAddress.reset();
    }

  }



  handleMonthsAndYears(){
    const creditCardFormGroup=this.checkoutFormGroup.get('craditCard');
    const currentYear: number= new Date().getFullYear();
    const selectedYear:number=Number(creditCardFormGroup!.value.expiarationYear);
    let startMonth:number;
    if(currentYear===selectedYear){
      startMonth=new Date().getMonth()+1;
    }else{
      startMonth=1;
    }

    this.foodboxFormService.getCraditCardMonths(startMonth).subscribe(
      data=>{
        console.log("Retrived cradit card Years: "+JSON.stringify(data));
        this.craditCardMonths=data;
      });
  }



  getStates(formGroupName:string){
    const formGroup= this.checkoutFormGroup.get(formGroupName); // read the selected countrycode from the FORM
  
    console.log("formGroupName:"+formGroupName);
    const countryId = formGroup!.value.country.id;

    // const countryCode = formGroup!.value.country.code;
    console.log("countryCode:"+countryId);
    const countryName = formGroup!.value.country.name;
          // read the selected countrycode from the FORM

    this.foodboxFormService.getStates(countryId).subscribe(
      data =>{
        if(formGroupName==="shippingAddress"){
          this.shippingAddressStates=data;
        }else {
          this.billingAddressStates=data;
          console.log("billingAddressStates"+this.billingAddressStates);
        }

        //select the first item by default
        formGroup!.get('state')!.setValue(data[0]);
      }
    )

  }



  reviewCartDetails(){
    //get a handler to the cart item
    this.cartItems=this.cartService.cartItems;

    //subscrib to the cart's total price
    this.cartService.totalPrice.subscribe(data =>this.totalPrice=data);

    //subscribe to the cart's total quantity
    this.cartService.totalQuantity.subscribe(data =>this.totalQuantity=data);

    //compute cart's total price and totalQuantity
    this.cartService.computeCartTotals();

  }
}



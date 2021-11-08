import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductServiceService } from './services/product-service.service';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { SearchComponent } from './components/search/search.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthServiceService } from './services/auth-service.service';
import { AuthAdminService } from './services/auth-admin.service';


const routes: Routes = [
  {path:"checkout", component:CheckoutComponent,canActivate:[AuthServiceService]},
  {path:"signup", component:SignupComponent},
  {path:"admin-login", component:AdminLoginComponent},
  {path:"user-login", component:UserLoginComponent},
  {path:"dashboard", component:DashboardComponent,canActivate:[AuthAdminService]},
  {path:"cart-details", component:CartDetailsComponent,canActivate:[AuthServiceService]},
  {path:"products/:id", component:ProductDetailsComponent},
  {path:"search/:keyword", component:ProductsListComponent},
  {path:"category/:id", component:ProductsListComponent},
  {path:"category", component:ProductsListComponent},
  {path:"products", component:ProductsListComponent},
  {path:"", redirectTo:"/products",pathMatch:"full"},
  {path:"**", redirectTo:"/products",pathMatch:"full"},

];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    UserLoginComponent,
    CartStatusComponent,
    CartDetailsComponent,
    ProductDetailsComponent,
    ProductCategoryComponent,
    SearchComponent,
    PaymentComponent,
    DashboardComponent,
    MenuComponentComponent,
    AdminLoginComponent,
    SignupComponent,
    CheckoutComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [ProductServiceService,AuthServiceService,AuthAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }

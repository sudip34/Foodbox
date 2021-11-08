import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Product} from '../common/Product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl1 = "http://18.159.124.247:8080/api/products";
  // private baseUrl2 = "http://localhost:8080/api/product";

  private categoryUrl1= "http://18.159.124.247:8080/api/products-category";


  constructor(private httpClient: HttpClient) { }

  getProductsList():Observable<Product[]>{
    
    return this.httpClient.get<Product[]>(this.baseUrl1);
   
  }

  getProductList(theCurrentCategoryId:number,theSortDirection:string):Observable<Product[]>{

    //build url
    const searchUrl = `${this.baseUrl1}/category/${theCurrentCategoryId}?sortField=unitPrice&sortDir=${theSortDirection}`;
    return this.httpClient.get<Product[]>(searchUrl);
  }



  searchProducts(name:string,theSortDirection:string):Observable<Product[]>{

    //build url based on keyword
    const searchUrl1=`${this.baseUrl1}/search/${name}?sortField=unitPrice&sortDir=${theSortDirection}`;
    
    return this.httpClient.get<Product[]>(searchUrl1);
  }



  getTheProduct(theProductId:number):Observable<Product>{
    
    //url building- based on the product id

    const productUrl=`${this.baseUrl1}/${theProductId}`

    return this.httpClient.get<Product>(productUrl);
  }

  



  getProductCategories():Observable<ProductCategory[]>{
    
    return this.httpClient.get<ProductCategory[]>(this.categoryUrl1);
    
  }


  createProductCategory(theCategory: ProductCategory): Observable<ProductCategory> {
    const ProductCategoryUrl = `${this.categoryUrl1}/add`;
    return this.httpClient.post<ProductCategory>(ProductCategoryUrl, theCategory);
  }


  createProduct(theProduct: Product): Observable<Product> {
    const productUrl = `${this.baseUrl1}/add`;
    return this.httpClient.post<Product>(productUrl, theProduct);
  }

  updateProduct(theProduct: Product): Observable<Product> {
    const productUrl = `${this.baseUrl1}/update`;
    return this.httpClient.put<Product>(productUrl, theProduct);
  }

  deleteProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl1}/delete/${theProductId}`;
    return this.httpClient.delete<Product>(productUrl);
  }

  activeProduct(theProductId: number) {
    const productUrl = `${this.baseUrl1}/activate/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
   
  }

  deactiveProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl1}/deactivate/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }



  
}











//this interface helps to unwrap the json data from REST  api
interface GetResponseProducts{
  content:Product[],
  pageable:{
    totalPages:number,
    totalElements:number,
    size:number,
    number:number

  }
}
interface GetResponseProductCategory{
  
  productCategories:ProductCategory[];
  
}
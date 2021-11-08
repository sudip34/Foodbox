import { ProductCategory } from './../../common/product-category';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  productCategory :ProductCategory[]=[];
  currentCategoryId: number=0;

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }



  listProductCategories() {

    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategory = data;
      }
    );
  }



}

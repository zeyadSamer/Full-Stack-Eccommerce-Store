import { Component, OnInit } from '@angular/core';
import Product from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {



  public showedProduct:Product= {
      id:0,
      title:'',
      description:'',
      price:0,
      image:'',
      category:'',
      quantity:0
    };



  public productQuantity:number=1;

  
  constructor(private productsService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {

    this.getSelectedProduct();
    
  }




  getSelectedProduct(){


    this.showedProduct=this.productsService.getSelectedProduct();


  }

  addProductToCart(){


    this.showedProduct.quantity=parseInt(this.productQuantity as unknown as string);

    this.cartService.addItem(this.showedProduct);
    alert(`${this.showedProduct.title} is added to cart`)


  }
  










}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {



  products:any =[];
  isDataReceived:boolean=false;


  constructor(private router:Router,private userService:UserService ,private productsService:ProductsService,private cartService:CartService) { }

   ngOnInit() {

     if(!this.userService.registeredUser){
      this.router.navigate(['/register']);
     }


    this.productsService.getProducts().subscribe(res => {



        this.products = res;

        //just renaming our object keys

       this.products=this.products.map((product:any) => {
        product={
          id:product.id,
          title:product.product_name,
          description:product.product_description,
          image:product.product_image,
          price:product.price,
          category:'',
          quantity:0,


        }
        return product;
      

      });





      this.isDataReceived = true;




      console.log(this.products);


    });



  


  
  }


  addToCart(product:any){
   
    this.cartService.addItem(product);
  }


  removeFromCart(id:any){
    this.cartService.remove(id);

  }





}

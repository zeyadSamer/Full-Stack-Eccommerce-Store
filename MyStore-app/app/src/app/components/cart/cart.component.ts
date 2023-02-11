import { Component, OnInit } from '@angular/core';
import Product from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import User from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

import { Router } from '@angular/router';
import { Order } from 'src/app/Models/Order';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public cartItems: Array<Product> =[];
  public orderId:number=0;
  
  public totalPrice:number=0;
  public user:User={

    name:'',
    address:'',
    creditCardNumber:''
  };



 
   

  
  constructor(private router:Router,private cartService:CartService,private userService:UserService) { }

  ngOnInit(): void {
    if(!this.userService.registeredUser){
      this.router.navigate(['/register']);
     }

    this.getCartItems(); 
    this.getTotalPrice();
  }

  getCartItems(){

    this.cartItems=this.cartService.getItems();
    
  }


  getTotalPrice(){
    this.totalPrice=parseFloat(this.cartService.getTotalPrice().toFixed(2));
   
  }



  submitOrder(){ 
    
    if(this.cartItems.length>0){

    this.userService.submitUserDetails(this.user);
    let id=0;

    this.cartService.postOrder({
      totalPrice:this.totalPrice,
      activeStatus:'pending',
      user_id:this.userService.registeredUser!.id

    }).subscribe(res=>{

    
      let orderId=res.body.id;
      console.log(orderId)
      this.cartItems.forEach( item=>{
        console.log(item);
        console.log("submitting item:"+item.title );
 
       
       let result=  this.cartService.addProductToOrder(orderId,item.id,item.quantity).subscribe(res=>{
        console.log(res);




       });
    
        })
      

    })

  }
 







    this.router.navigate(['/checkout']);
  
  
  
  }


  removeProductFromCart(id:any,itemName:String){
    this.cartService.remove(id);

    //to get again the cart items after removal of an item
    this.getCartItems();
    this.getTotalPrice();
    alert(`${itemName} removed from cart`)


  }
  




}

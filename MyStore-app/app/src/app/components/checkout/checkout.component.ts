import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import User from 'src/app/Models/User';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {



  public user:any;
  public totalPrice:number=0;
  constructor(private router:Router,private userService:UserService,private cartService:CartService) { }



  ngOnInit(): void {
    if(!this.userService.registeredUser){
      this.router.navigate(['/register']);
     }

    this.user=this.userService.getUserDetails();
    this.totalPrice=this.cartService.getTotalPrice();
    this.resetCartAfterOrderCompletion();



    
  }

  getUserName(){
    return this.user.name;
  }

  resetCartAfterOrderCompletion(){



    this.cartService.resetCart();
  }







}

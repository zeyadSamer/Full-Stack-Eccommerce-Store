import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private userService:UserService,private cartService:CartService) { }

  public cartItemsCount=0;

  ngOnInit(): void {
    
  }



  getCartSize(){
    return this.cartItemsCount=this.cartService.getCartSize();

  }
  getSignedInUser(){

    return this.userService.registeredUser?.email;
  }

  logout(){

   this.userService.logout()
   this.router.navigate(['/register'])
   



  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteringUser } from 'src/app/Models/RegisteringUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {


  public isSigningIn:boolean=false;
  public signUpTitle:String='Sign Up'
  public signInTitle:string='Sign In'


  

 registeringUser:RegisteringUser={
  id:0,
   firstName: "",
   lastName: "",
   phone1: "",
   phone2: "",
   email:"",
   password:""
 }





  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }



  printInfo(){
    console.log(this.registeringUser);
  }



  signIn(){



    this.userService.signIn(this.registeringUser).subscribe(res=>{


      let data=JSON.parse(JSON.stringify(res))
      console.log("status"+res.status)
      console.log(res.statusText)
      console.log(res);
  
      console.log(data.body)
       if(data.body.token!==null){
        alert('successfully signed in');
        this.registeringUser.id=data.body.id
        this.userService.acceptRegisteringUser(this.registeringUser);
        this.router.navigate(['/products']);
       }else{

        alert(data.body.errorMessage)

       }


        
    })




  }



  signUp(){

    this.userService.signUp(this.registeringUser).subscribe({next:res=>{
     
      console.log(res)
      let data=JSON.parse(JSON.stringify(res))
      
  


      if(data.body.token!==null){
        alert('successfully signed up');
        this.registeringUser.id=data.body.id;
        this.userService.acceptRegisteringUser(this.registeringUser);
        this.router.navigate(['/products']);
       }else{

        alert(data.body.errorMessage)

       }






     

    },error:e=>{
      console.log(e)
      




    } });

    





  }


  
  handleUserSigning(){

    if(this.isSigningIn){
       this.signIn();
    }else{
       this.signUp();
    }


  }




  getTitle(){


    return this.isSigningIn?this.signInTitle:this.signUpTitle;




  }





toggleSigningIn(){
  this.isSigningIn=!this.isSigningIn;
}






}

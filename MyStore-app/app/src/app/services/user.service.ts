import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/Models/User';

import { RegisteringUser } from '../Models/RegisteringUser';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  public registeredUser: RegisteringUser | null =null;

  private userDetails:any;
  private baseUrl='http://localhost:3000/';
  private headers= { 'content-type': 'application/json'}

  constructor(private http:HttpClient) { }

  

  submitUserDetails(user:User){

  this.userDetails={...user};
  //handle posting to api logic

    
  }

  getUserDetails(){
    return this.userDetails;
  }


   signUp(user:RegisteringUser){

    
    const body=JSON.stringify(user);
    console.log(body)




    let response= this.http.post(this.baseUrl + `users`, body,{'headers':this.headers,observe:'response'},);
    console.log(response);
 
    return response;




  }


  signIn(user:RegisteringUser){

    const body=JSON.stringify(user);
    console.log(body)




    let response=this.http.post(this.baseUrl + `users/authenticate`, body, { 'headers': this.headers, observe: 'response' });

   console.log(response);
 
    return response;




  }



  acceptRegisteringUser(user:RegisteringUser){
    this.registeredUser=user;
    
  }

  logout(){

    this.registeredUser=null;




  }






}


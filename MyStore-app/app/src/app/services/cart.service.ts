import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/Order';
import Product from '../Models/Product'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:any[] =[];
  
  private baseUrl='http://localhost:3000/';
  private headers= { 'content-type': 'application/json'};
  

  constructor(private http:HttpClient) { }




   postOrder(order:Order):Observable<any> {
  
    const body=JSON.stringify(order);
    console.log(body)

  return  this.http.post(this.baseUrl + `orders`, body,{'headers':this.headers,observe:'response'});
 
  


}

addProductToOrder(orderId:number,productId:number,productQuantity:number){
  
  const body=JSON.stringify({
    productId,
    quantity:productQuantity,

  });

  let response= this.http.post(this.baseUrl + `orders/${orderId}/products`, body,{'headers':this.headers,observe:'response'},);

   return response; 



}









  isProductExistInCart(product:Product){

    if(this.cartItems.length){
      
    for(let item of this.cartItems){
      if(item.id===product.id){

        item.quantity=product.quantity;
        return true;
      }
    }
  }
    return false;
  }

  addItem(product:Product){


    if(!this.isProductExistInCart(product)){

      this.cartItems.push(product);

    }

  }




  getItems(){

    return this.cartItems;
  }

  getTotalPrice(){

    let total=0;

    for(let item of this.cartItems){

      total+=item.quantity*item.price;






    }
    return total;
    



  }


  getCartSize(){

    let total:number=0;
    for(let item of this.cartItems){

      total+=item.quantity;


    }
    return total;

  
  }


  resetCart(){

    this.cartItems=[];




  }


  remove(id:number){

    this.cartItems=this.cartItems.filter(item=>item.id!==id)

  }







 
  
}



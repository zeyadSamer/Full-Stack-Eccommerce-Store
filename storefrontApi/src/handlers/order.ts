import express,{Request,Response} from 'express';
import orderStore from '../models/ordersModel';
import { Order } from '../models/ordersModel';
import authenticateJwt from './jwtauth';

const orderOperations=new orderStore();


const createOrder=async(req:Request,res:Response)=>{

   // const id=parseInt(req.params.id);
    const totalPrice=parseInt(req.body.totalPrice) ;
    const activeStatus= (req.body.activeStatus as unknown)as string;
    const user_id=parseInt(req.body.user_id);
 
   const receivedOrderBody={
     //  id,
       totalPrice,
       activeStatus,
       user_id

   }


   try{
       

    const order= await orderOperations.create(receivedOrderBody);
    
    res.json(order);

   }catch(err)
   {
       throw err;



   }






}




const addProductToOrder=async(req:Request,res:Response)=>
{

    const quantity=parseInt(req.body.quantity) ;
    const orderId=parseInt(req.params.id) ;
    const productId=parseInt(req.body.productId);

    console.log(quantity,orderId,productId);
    
    


    try{


    const order=await orderOperations.addProductToOrder(quantity,orderId,productId);


    res.json(order);

    }catch(err)
    {
        res.status(400);
        throw err;
    }





}



const showUserOrder=async(req:Request,res:Response)=>{
   
   
   
    const user_id=parseInt(req.params.id);


    try{


        const userOrder=await orderOperations.show(user_id);

        res.json(userOrder);


    }catch(err){

        throw err;

    }





}



const orderRoutes=(app:express.Application)=>{


app.post('/orders',createOrder);
app.post('/orders/:id/products',addProductToOrder);
app.get('/orders/:id',authenticateJwt,showUserOrder)

}

export default orderRoutes;
import storeUser from "../models/usersModel";
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import authenticateJwt from "./jwtauth";



const userOperations=new storeUser();





const showAllUsers= async(req:Request,res:Response)=>{

    try{
   
    const usersToShow=await userOperations.index();
    res.json(usersToShow);
    }catch(err){
        throw err;
        res.send('failed to show users');
        
    }

}


const showCertainUser=async(req:Request,res:Response)=>{

    try{
    
    const id=parseInt(req.params.id);

    const userToShow=await userOperations.show(id);
    res.json(userToShow);
    }catch(err)
    {
        throw err;
        res.send('failed to show that user');
    }

}


const CreateNewUser= async(req:Request,res:Response)=>{


    const firstName=(req.body.firstName as unknown)as string;
    const lastName=(req.body.lastName as unknown) as string;
    const password=(req.body.password as unknown) as string;
    const email=(req.body.email as unknown) as string;
    const phone1=(req.body.phone1 as unknown) as string;
    const phone2=(req.body.phone2 as unknown ) as string;


 //const id=parseInt(req.params.id);


    const user={
        
   //      id,
        firstName,
        lastName,
        email,
        phone1,
        phone2,
        password,


    }
   
  
     const newUser=await userOperations.createUser(user);

     if(newUser===null){
        res.json({
            token:null,
            errorMessage:'Failed to create user with that email or phone'
        })

     }else{
     
     try{

     const secretpassword=(process.env.TOKEN_SECRET as unknown) as string;

     const token=jwt.sign({user:newUser},secretpassword)

     res.status(200).json({
        id:newUser.id,
        token,
        email:newUser.email,
        password:newUser.password,
        errorMessage:null
     });

    }catch(err){
        
         console.log('error thrown here')

        res.json({
            token:null, 
            errorMessage:"failed to create user"
         }).status(400);


          throw err;

    }
    
}
}

const authenticate=async(req:Request,res:Response)=>{


    const email=(req.body.email as unknown) as string;
    const passwordToBeChecked=(req.body.password as unknown) as string;

    console.log(`received ${email},${passwordToBeChecked}`)
   const user=await userOperations.authenticateUser(email,passwordToBeChecked); 
   
  

   if(user===null)
   {
    res.json({

        token:null,
        errorMessage:"unable to find user with that email and password"




    }).status(404);

   }else{

    try{
   

        const secretpassword=(process.env.TOKEN_SECRET as unknown) as string;
   
       const token=jwt.sign({user:user},secretpassword)
   
    
        res.status(200).json({
            id:user.id,
            token,
            email:user.email,
            password:passwordToBeChecked



        });

       }catch(err){


        res.json({
            token:null,
            errorMessage:"Invalid parameter"




        }).status(400);


            
   
             throw err;
       }
   
   
   
   

   }


}


const userRoutes=(app:express.Application)=>{



    app.get('/users',authenticateJwt,showAllUsers);
    app.get('/users:id',authenticateJwt,showCertainUser);
    app.post('/users',CreateNewUser);
    app.post('/users/authenticate',authenticate)




}

export default userRoutes;
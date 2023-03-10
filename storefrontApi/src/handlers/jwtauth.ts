

import express,{Request,Response} from 'express';
import jwt from 'jsonwebtoken';





const authenticateJwt= async (req:Request,res:Response,next: () => void)=> {


    try{
        
      const authorizationHeader=(req.headers.authorization as unknown)as string;
  
       
      if(authorizationHeader===undefined)
      {
        res.send('token required to access resources');
        return;
      }
  
      // for bearer token
      const receivedToken=authorizationHeader.split(' ')[1] ;
     
    
      const trueToken=(process.env.TOKEN_SECRET as unknown)as string;
       
       jwt.verify(receivedToken,trueToken); 
       
       next();
       
    }catch(err){
      res.sendStatus(401);
      throw err;
     
      
  
    }
  
  }


  export default authenticateJwt;
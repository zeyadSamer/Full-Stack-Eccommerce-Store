import bcrypt from 'bcrypt';
//@ts-ignore
import client from '../database';


export type User= {

    id?:number
    firstName:string;
    lastName:string;
    password:string;
    email:string;
    phone1:string;
    phone2?:string;
    
}


const pepper=process.env.BCRYPT_PASSWORD;
 
const saltRounds=(process.env.SALT_ROUNDS  as unknown)as string;

class storeUser{




    async index():Promise<User[]>{

    //@ts-ignore
    const connection= await client.connect();
    const sql =`select * from users `;
    const result=await connection.query(sql);
    
    connection.release();

     return result.rows;




    }


   //show certain user

   async show(id:Number):Promise<User>{



  //@ts-ignore
  const connection= await client.connect();
  const sql =`select * from users where id=$1`;
  const result=await connection.query(sql,[id]);
  
  connection.release();

   return result.rows[0];


 
   }

   //create user  or sign up


   async createUser(u:User):Promise<User|null>{
   
    try{
    //@ts-ignore
   const connection= await client.connect();

   //check valid data
    const s='select * from users where email=$1'

    let res=await connection.query(s,[u.email])
  
    if(u.phone1===u.phone2){
        return null;
    }

    
    //if there is a result for an email that equals the current email
    if(res.rows.length!==0){

        return null;
    }

    




   //-------------------------------------
   const sql=`insert into users(firstname,lastname,email,userpassword) values($1,$2,$3,$4) returning *`;
   const sql2=`INSERT INTO users_phones values($1,$2) `
   const sql3 =`INSERT INTO users_phones values($1,$2)`
   const readIdSql=`select id from users where email=$1`;

 
   const hashedPassword=bcrypt.hashSync(u.password+pepper,parseInt(saltRounds)); 
   
   const result=await connection.query(sql,[u.firstName,u.lastName,u.email,hashedPassword]);

  
   res=await connection.query(readIdSql,[u.email]);
   const {id}=res.rows[0];

   console.log(res.rows[0]);




   const res2=await connection.query(sql2,[id,u.phone1]);

   if(u.phone2!==null){
    const res3=await connection.query(sql3,[id,u.phone2]);

   }




   connection.release();
   
    

   return result.rows[0];

    }
     catch(err)
    
     {
        
     throw err;
    }

   }



  async authenticateUser(email:string,password:string):Promise<User | null> {

   try{

    //@ts-ignore
   const connection=await client.connect();

   //get user data to check on it
   const sql=`select * from users where email=$1 `;

   const result = await connection.query(sql,[email]);
    
    connection.release();
   
   
    //check if user didn't sign up from the beginning

   

    if(result.rows.length) {
      
        const user = result.rows[0]
       //check user password
         
        

       if(bcrypt.compareSync(password+pepper,user.userpassword))
       {
           
           return user; 
       } 

    }

 return null;
  
}catch(err)
  {
      console.log('catched an error');
      throw err;
  }



  }



}

export default storeUser;

create table users(
id SERIAL PRIMARY KEY ,
firstname varchar(30) NOT NULL,
lastname varchar(30) NOT NULL,

email varchar(50) Unique NOT NULL,


userpassword varchar(100) NOT NULL



);

 INSERT INTO users(firstname,lastname,email,userpassword) values('Zeyad','Ahmed','zeyad@email.com','123456');
 INSERT INTO users(firstname,lastname,email,userpassword)  values('loay','wael','loay@mail.com','123456');
 INSERT INTO users(firstname,lastname,email,userpassword)  values('mohamed','Aly','mohamed@mail.com','123456');
  INSERT INTO users(firstname,lastname,email,userpassword)  values('mirna','aly','mirna@mail.com','123456');
 INSERT INTO users(firstname,lastname,email,userpassword)  values('gad','Aly','gad@mail.com','123456');

  INSERT INTO users(firstname,lastname,email,userpassword)  values('ibrahim','yosri','ibra@mail.com','123456');
  INSERT INTO users(firstname,lastname,email,userpassword)  values('aser','elsayed','aser@mail.com','123456');
 INSERT INTO users(firstname,lastname,email,userpassword)  values('waleed','Atef','waleed@mail.com','123456');

   INSERT INTO users(firstname,lastname,email,userpassword)  values('Ahmed','karam','karam@mail.com','123456');
 INSERT INTO users(firstname,lastname,email,userpassword)  values('Zeyad','tamer','sayedyElra2ees@mail.com','123456');
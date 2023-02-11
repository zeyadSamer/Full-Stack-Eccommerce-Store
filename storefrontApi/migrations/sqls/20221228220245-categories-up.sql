CREATE TABLE categories(

    id SERIAL PRIMARY KEY,
    category_name varchar(40) NOT NULL,
    sales_percentage decimal ,
    
    rating decimal,
    activeStatus boolean NOT NULL



);


INSERT INTO categories VALUES(

1,
'clothes',
0.1,
5,
TRUE

);



INSERT INTO categories VALUES(

2,
'bags',
0.3,
4.3,
TRUE

);



INSERT INTO categories VALUES(

3,
'electronics',
0.4,
5,
TRUE

);




INSERT INTO categories VALUES(

4,
'jewelery',
0.3,
5,
TRUE

);



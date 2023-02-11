CREATE TABLE products(
    
id SERIAL PRIMARY KEY ,
product_name VARCHAR(250) NOT NULL,
price decimal NOT NULL,
product_description text NOT NULL,
product_image varchar(400) NOT NULL ,


category_id int NOT NULL,
offer_id int ,

FOREIGN KEY(offer_id) REFERENCES offers(id),
FOREIGN KEY(category_id) REFERENCES categories(id) 


);

INSERT INTO products VALUES(
1,
'Fjallraven - Foldsack No. 1 Backpack',
109.5,
'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
2,
1

);

INSERT INTO products VALUES(
    2,
'Mens Casual Premium Slim Fit T-Shirts '
    ,
    22.3
    ,
    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    1,
    2

);



INSERT INTO products VALUES(
3,
'Mens Cotton Jacket',
55.9,
'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',

1,
NULL

);

 INSERT INTO products values(
     4,
     'Mens Casual Slim Fit',
     15.99,
     'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
     'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
     1,
     null

 );


 INSERT into products VALUES(

     5,
     'John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain Bracelet',
     695,
     'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',
     'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
     4,  
   null


 );




 INSERT INTO products VALUES(
    6,
    'Solid Gold Petite Micropave ',
    168,
    'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',

    'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    4,
    null

 );


 

 INSERT INTO products VALUES(
    7,
    'White Gold Plated Princess',
    
    9.99,
    'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine Day...',
    'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    4,
    null

 );



INSERT INTO products values(

8,
'Pierced Owl Rose Gold Plated Stainless Steel Double',
10.99,
'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
4,
null

);


INSERT INTO products VALUES(

9,
'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
109,
'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
3,
null



);




INSERT INTO products VALUES(

10,
'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
109,
'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
3,
null

);



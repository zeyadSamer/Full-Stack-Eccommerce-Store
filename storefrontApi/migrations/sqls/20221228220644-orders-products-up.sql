CREATE TABLE orders_products(

id SERIAL PRIMARY KEY,
quantity integer NOT NULL,
orders_id bigint REFERENCES orders(id) NOT NULL ,
products_id bigint REFERENCES products(id) NOT NULL



);



INSERT INTO orders_products(quantity,orders_id,products_id) values(4,1,2);
INSERT INTO orders_products(quantity,orders_id,products_id) values(1,1,3);
INSERT INTO orders_products(quantity,orders_id,products_id) values(5,1,4);

INSERT INTO orders_products(quantity,orders_id,products_id) values(5,4,3);
INSERT INTO orders_products(quantity,orders_id,products_id) values(6,3,3);
INSERT INTO orders_products(quantity,orders_id,products_id) values(4,4,4);

INSERT INTO orders_products(quantity,orders_id,products_id) values(2,2,2);
INSERT INTO orders_products(quantity,orders_id,products_id) values(1,3,3);
INSERT INTO orders_products(quantity,orders_id,products_id) values(4,4,4);


INSERT INTO orders_products(quantity,orders_id,products_id) values(6,7,7);
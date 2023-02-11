/* Replace with your SQL commands */

CREATE TABLE orders(


id SERIAL PRIMARY KEY ,
totalPrice decimal NOT NULL,
activeStatus VARCHAR(50) NOT NULL,
users_id bigint REFERENCES users(id) NOT NULL
 
 
);


INSERT INTO orders(totalPrice,activeStatus,users_id) values(210,'pending',1);
INSERT INTO orders(totalPrice,activeStatus,users_id) values(220,'pending',1);
INSERT INTO orders(totalPrice,activeStatus,users_id) values(230,'pending',1);

INSERT INTO orders(totalPrice,activeStatus,users_id) values(240,'shipped',2);
INSERT INTO orders(totalPrice,activeStatus,users_id) values(110,'shipped',2);
INSERT INTO orders(totalPrice,activeStatus,users_id) values(250,'shipped',2);

INSERT INTO orders(totalPrice,activeStatus,users_id) values(240,'cancelled',3);
INSERT INTO orders(totalPrice,activeStatus,users_id) values(110,'cancelled',4);
INSERT INTO orders(totalPrice,activeStatus,users_id) values(250,'cancelled',5);

INSERT INTO orders(totalPrice,activeStatus,users_id) values(2400,'pending',8);


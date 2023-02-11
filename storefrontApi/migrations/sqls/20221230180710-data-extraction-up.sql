SELECT * FROM USERS;

DELETE from users where id=10;

UPDATE  users set email='ibrahim@email.com' where email='ibra@mail.com';
SELECT max(price)as Maximum_Product_Price from products;
SELECT avg(price)as avg_Price_for_store_products from products;

select * from users join users_phones on users.id=users_phones.user_id;



 select product_name,price as old_price,price *offer_percentage as new_price,offer_percentage,occasion_name,
  
  expiration_date  ,starting_date ,(expiration_date - starting_date) as remaining_days
  from products join offers on products.offer_id=offers.id;
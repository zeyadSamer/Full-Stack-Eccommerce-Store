CREATE TABLE offers(

    id SERIAL PRIMARY KEY,
    offer_percentage decimal NOT NULL,
    occasion_name varchar(50) Unique,
    expiration_date date NOT NULL,
    starting_date date NOT NULL
    
);



INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.4,'Ramadan','2022-05-22','2022-06-22');

INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.5,'Eid Elfetr','2022-06-23','2022-06-26');

INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.7,'Eid Eladha','2022-07-22','2022-08-27');


INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.4,'Sham elnesem','2022-03-22','2022-03-30');

INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.5,'New year','2022-12-28','2022-01-04');

INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.7,'6th october','2022-10-06','2022-10-07');


INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.4,'Halloween','2022-11-22','2022-11-30');

INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.5,'Black friday','2022-01-25','2022-01-27');

INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.7,'Summer','2022-06-06','2022-06-12');


INSERT INTO offers(offer_percentage,occasion_name,starting_date,expiration_date) values(0.7,'New Hijreya year','2022-10-06','2022-10-08');






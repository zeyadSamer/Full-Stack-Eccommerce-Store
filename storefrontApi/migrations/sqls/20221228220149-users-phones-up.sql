create TABLE users_phones (

    user_id INTEGER NOT NULL ,
    phone varchar(30) ,
    PRIMARY KEY(user_id,phone),
    FOREIGN KEY(user_id) REFERENCES users(id) 


);

INSERT INTO users_phones(user_id,phone) values(1,'+78024242734');

INSERT INTO users_phones(user_id,phone) values(1,'+78024242444');

INSERT INTO users_phones(user_id,phone) values(2,'+78024242414');


INSERT INTO users_phones(user_id,phone) values(2,'+78024242424');

INSERT INTO users_phones(user_id,phone) values(3,'+78024242425');

INSERT INTO users_phones(user_id,phone) values(3,'+78024242426');


INSERT INTO users_phones(user_id,phone) values(4,'+78024242427');

INSERT INTO users_phones(user_id,phone) values(4,'+78024242428');

INSERT INTO users_phones(user_id,phone) values(5,'+78024242429');


INSERT INTO users_phones(user_id,phone) values(6,'+78024242420');
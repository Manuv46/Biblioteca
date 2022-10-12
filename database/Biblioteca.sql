DROP DATABASE IF EXISTS Library;

DROP TABLE IF EXISTS rental;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS users;

CREATE DATABASE Library
    
CREATE TABLE users (
	users_id serial PRIMARY KEY,
	first_name VARCHAR ( 50 ) NOT NULL,
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	registration_date TIMESTAMP NOT NULL
);


CREATE TABLE books (
	isbn BIGINT PRIMARY KEY,
	title VARCHAR ( 50 ) NOT NULL,
	author VARCHAR ( 255 ) NOT NULL,
	year_publication DATE NOT NULL
);


CREATE TABLE rental (
	users_id serial NOT NULL,
	isbn BIGINT NOT NULL,
	rental_date TIMESTAMP NOT NULL,
	PRIMARY KEY (users_id, isbn),
	FOREIGN KEY (isbn) 
		REFERENCES books (isbn),
	FOREIGN KEY (users_id) 
		REFERENCES users (users_id)
);

INSERT INTO users (first_name,username,email,registration_date) VALUES 
	('Gino', 'Gino88', 'gino@gmail.com', CURRENT_TIMESTAMP),
	('Giuseppe', 'Beppe', 'beppe@gmail.com', CURRENT_TIMESTAMP),
	('Pippo', 'Pippo', 'pippo@gmail.com', CURRENT_TIMESTAMP),
    ('Franchino', 'Franco', 'franco@gmail.com', CURRENT_TIMESTAMP);
	

INSERT INTO books (isbn, title, author, year_publication) VALUES
    ('9788832737493', 'No sleep till Shengal', 'Zerocalcare', '2022-10-04'),
    ('9788806254483', 'Il rosmarino non capisce l`inverno', 'Matteo Bussola', '2022-09-20'),
    ('9788820074449', 'Fairy Tale', 'Stephen King', '2022-09-01'),
    ('9788892890992', 'A touch of darkness. Ade & Persefone. Vol. 1', 'Scarlett St. Clair', '2022-08-15'),
    ('9788893365772', 'Scottecs megaestate', 'Sio', '2022-06-30'),
    ('9788893365512', 'Scottecs megazine (Vol. 30)', 'Sio', '2022-01-01'),
    ('9788893365925', 'Shonen Ciao (Vol. 7) ', 'Sio', '2022-01-01');
    

INSERT INTO rental (users_id, isbn, rental_date) VALUES
    ('2','9788832737493', CURRENT_TIMESTAMP),
    ('4','9788893365772', CURRENT_TIMESTAMP);

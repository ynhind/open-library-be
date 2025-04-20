CREATE DATABASE openlibrary;

CREATE TABLE book (
	book_id SERIAL PRIMARY KEY,
    title VARCHAR(255)
);
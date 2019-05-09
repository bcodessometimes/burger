CREATE DATABASE burgers_DB;
USE burgers_DB;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT,
    burger VARCHAR(20) NOT NULL,
    eaten BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger, eaten) VALUES ("Bacon Cheeseburger", false);

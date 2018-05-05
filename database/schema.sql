CREATE DATABASE sidebar;

USE photos;

CREATE TABLE places (
	id INT,
	menu_url TEXT,
	address TEXT,
	location TEXT,
	url TEXT,
	phone TEXT,
	hours TEXT ARRAY,
	coords TEXT ARRAY
)
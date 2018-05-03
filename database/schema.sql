CREATE DATABASE sidebar;

USE photos;

CREATE TABLE `sidebar`.`places` (
	id INT,
	name TEXT,
	menu_url TEXT,
	address TEXT,
	location TEXT,
	url TEXT,
	phone TEXT,
	hours JSON,
	coords JSON,
)



// id
// name
// menu_url
// addresslocation
// urlphone
// hours
// coords lat lng
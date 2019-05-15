DROP SCHEMA IF EXISTS pfe CASCADE;
CREATE SCHEMA pfe;

CREATE TABLE pfe.users (
  id_user SERIAL PRIMARY KEY,
  pseudo VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  number VARCHAR(255) NOT NULL,
  zip_code VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL
);

CREATE TABLE pfe.products (
  id_product SERIAL PRIMARY KEY,
  id_seller INTEGER NOT NULL,
  id_buyer INTEGER NULL,
  state VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_seller) REFERENCES pfe.users(id_user),
  FOREIGN KEY (id_buyer) REFERENCES pfe.users(id_user)
);

INSERT INTO pfe.users (pseudo, firstname, lastname, password, address, number, zip_code, city, country, email, phone) VALUES ('jholodi16','Jérémy','Holodiline','mdpjeremy','Rue Random', '42', '1000', 'Bruxelles', 'Belgium', 'jeremy.holodiline@student.vinci.be','0439098765');
INSERT INTO pfe.users (pseudo, firstname, lastname, password, address, number, zip_code, city, country, email, phone) VALUES ('mmisson16','Malo','Misson','mdpmalo','Rue Truc', '24', '1000', 'Bruxelles', 'Belgium', 'malo.misson@student.vinci.be','0427638522');
INSERT INTO pfe.users (pseudo, firstname, lastname, password, address, number, zip_code, city, country, email, phone) VALUES ('amozzon16','Arturo','Mozzon','mdparturo','Rue Machin', '93', '1000', 'Bruxelles', 'Belgium', 'arturo.mozzon@student.vinci.be','0456286305');
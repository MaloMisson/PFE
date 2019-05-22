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
  phone VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE pfe.categories(
  id_category SERIAL PRIMARY KEY,
  picture VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE pfe.products (
  id_product SERIAL PRIMARY KEY,
  id_seller INTEGER NOT NULL,
  id_category INTEGER NOT NULL,
  picture VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  date TIMESTAMPTZ DEFAULT Now(),
  FOREIGN KEY (id_seller) REFERENCES pfe.users(id_user),
  FOREIGN KEY (id_category) REFERENCES pfe.categories(id_category)
);

CREATE TABLE pfe.sales (
  id_sale SERIAL PRIMARY KEY,
  id_product INTEGER NOT NULL,
  id_buyer INTEGER NOT NULL,
  sale_date TIMESTAMPTZ DEFAULT Now(),
  id_stripe VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_product) REFERENCES pfe.products(id_product),
  FOREIGN KEY (id_buyer) REFERENCES pfe.users(id_user)
);

INSERT INTO pfe.users (pseudo, firstname, lastname, password, address, number, zip_code, city, country, email, phone, description) VALUES ('jholodi16','Jérémy','Holodiline','$2y$12$Vx9KFqWe5LxbjoCmW4EERuyXTTSv5tNeNRSZWN1vVAIxgW8NL.qmO','Rue Random', '42', '1000', 'Bruxelles', 'Belgium', 'jeremy.holodiline@student.vinci.be','0439098765', 'je suis un geek');
INSERT INTO pfe.users (pseudo, firstname, lastname, password, address, number, zip_code, city, country, email, phone, description) VALUES ('mmisson16','Malo','Misson','$2y$12$0yxc5DQ/Eiug24.S652MFuCysZngA2FljRTJ1o9YTnK9Lh/aClzIq','Rue Truc', '24', '1000', 'Bruxelles', 'Belgium', 'malo.misson@student.vinci.be','0427638522','je suis egalement un geek');
INSERT INTO pfe.users (pseudo, firstname, lastname, password, address, number, zip_code, city, country, email, phone, description) VALUES ('amozzon16','Arturo','Mozzon','$2y$12$6tksYnJGk1LXA8qq8Ls3h.XQ6tgxpHOyw5plZcmUxgXDjlIWkogH2','Rue Machin', '93', '1000', 'Bruxelles', 'Belgium', 'arturo.mozzon@student.vinci.be','0456286305','je suis effectivement egalement un geek');
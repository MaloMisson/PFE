DROP SCHEMA IF EXISTS pfe CASCADE;
CREATE SCHEMA pfe;

CREATE TABLE pfe.utilisateurs (
  u_id SERIAL PRIMARY KEY,
  pseudo VARCHAR(255) NOT NULL,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  mot_de_passe VARCHAR(255) NOT NULL,
  adresse VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telephone VARCHAR(255) NOT NULL
);

CREATE TABLE pfe.articles (
  a_id SERIAL PRIMARY KEY,
  vendeur INTEGER NOT NULL,
  acheteur INTEGER NULL,
  etat VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  prix VARCHAR(255) NOT NULL,
  FOREIGN KEY (vendeur) REFERENCES pfe.utilisateurs(u_id),
  FOREIGN KEY (acheteur) REFERENCES pfe.utilisateurs(u_id)
);
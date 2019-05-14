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

INSERT INTO pfe.utilisateurs (
  pseudo,nom,prenom,mot_de_passe,adresse,email,telephone
) VALUES ('jholodi16','Holodiline','Jérémy','mdpjeremy','Rue Random 42 Bruxelles','jeremy.holodiline@student.vinci.be','0439098765');

INSERT INTO pfe.utilisateurs (
  pseudo,nom,prenom,mot_de_passe,adresse,email,telephone
) VALUES ('mmisson16','Misson','Malo','mdpmalo','Rue du Sanglier 24 Bruxelles','malo.misson@student.vinci.be','0427638522');
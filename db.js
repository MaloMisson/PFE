const { Client } = require('pg');

const db = new Client({
  user: 'hzewnisw',
  host: 'manny.db.elephantsql.com',
  database: 'hzewnisw',
  password: 'QtFVbCTSUNKDzXeqgHP485ehEOtEaynd',
  port: 5432,
});

// GET UTILISATEUR BY PSEUDO
function selectUtilisateur(utilisateur){
  const queryText = 'SELECT * FROM pfe.utilisateurs WHERE pseudo = $1';
  const values = [utilisateur.pseudo];
  let resultat;
  db.connect();
  db.query(queryText, values, (err, res) => {
    if (err) {
      console.log(err.stack);
      resultat = null;
    } else {
      console.log('SELECT TEST : ' + res.rows[0]);
      resultat = res.rows[0];
    }
    db.end();
    return resultat;
  });
}

// INSERT UTILISATEUR
function insertUtilisateur(utilisateur){
  const queryText = 'INSERT INTO pfe.utilisateurs (pseudo,nom,prenom,mot_de_passe,adresse,email,telephone) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *';
  const values = [utilisateur.pseudo,utilisateur.nom,utilisateur.prenom,utilisateur.mot_de_passe,utilisateur.adresse,utilisateur.email,utilisateur.telephone];
  let resultat;
  db.connect();
  db.query(queryText, values, (err, res) => {
    if (err) {
      console.log(err.stack);
      resultat = null;
    } else {
      console.log('INSERT TEST : ' + res.rows[0]);
      resultat = res.rows[0];
    }
    db.end();
    return resultat;
  })
}

// UPDATE UTILISATEUR
function updateUtilisateur(utilisateur){
  const queryText = 'UPDATE pfe.utilisateurs SET pseudo = $1, nom = $2, prenom = $3, mot_de_passe = $4, adresse = $5, email = $6, telephone = $7 WHERE u_id = $8 RETURNING *';
  const values = [utilisateur.pseudo,utilisateur.nom,utilisateur.prenom,utilisateur.mot_de_passe,utilisateur.adresse,utilisateur.email,utilisateur.telephone,utilisateur.u_id];
  let resultat;
  db.connect();
  db.query(queryText, values, (err, res) => {
    if (err) {
      console.log(err.stack);
      resultat = null;
    } else {
      console.log('UPDATE TEST : ' + res.rows[0]);
      resultat = res.rows[0];
    }
    db.end();
    return resultat;
  })
}

//TESTS
// Fonction vide pour tester avec le setTimeout
function vide(){

}

let testInsert = {
  pseudo : 'test1',
  nom : 'test1',
  prenom : 'test1',
  mot_de_passe : 'test1',
  adresse : 'test1',
  email : 'test1',
  telephone : 'test1'
}

let testSelect = {
  pseudo = 'test1'
}

let testUpdate = {
  u_id = 3,
  pseudo : 'test2',
  nom : 'test2',
  prenom : 'test2',
  mot_de_passe : 'test2',
  adresse : 'test2',
  email : 'test2',
  telephone : 'test2'
}

insertUtilisateur(testInsert);
selectUtilisateur(testSelect);
updateUtilisateur(testUpdate);
setTimeout(vide,5000);
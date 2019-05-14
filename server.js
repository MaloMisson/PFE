/*
var http = require('http');
const db =  require('./db.js');
var i=0;
var server = http.createServer(function(req, res) {
    console.log("--> CREATE SERVEUR :"+i++);
  res.writeHead(200);
  let testUpdate = {
    u_id : 3,
    pseudo : 'mmisson16',
    nom : 'test2',
    prenom : 'test2',
    mot_de_passe : 'test2',
    adresse : 'test2',
    email : 'test2',
    telephone : 'test2'
  }
  var user ={
      email: "no"
  };
  console.log("-> SelectUtilisateur");
  user= db.DB.selectUtilisateur(testUpdate);
  setTimeout(function(){},2000);
  res.end("'"+user+"'");
});
server.listen(process.env.PORT || 8080);
*/
const express = require('express');
const app = express();
const path = require('path');
const db =  require('./db.js');
var i=0;

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname, 'index.html'));
    console.log("--> CREATE SERVEUR :"+i++);
    res.writeHead(200);
    let testUpdate = {
      u_id : 3,
      pseudo : 'mmisson16',
      nom : 'test2',
      prenom : 'test2',
      mot_de_passe : 'test2',
      adresse : 'test2',
      email : 'test2',
      telephone : 'test2'
    }
    var user ={
        email: "no"
    };
    console.log("-> SelectUtilisateur");
    //user= db.DB.selectUtilisateur(testUpdate);
    /*
    setTimeout(function(){
        console.log(db.DB.selectUtilisateur(testUpdate));
        res.end("'"+user+"'");
    },2000);*/
    db.DB.selectUtilisateur(testUpdate,res);
});

app.listen(process.env.PORT || 8080, function(){
    console.log('Your node js server is running');
});
var express = require('express');
var router = express.Router();
var db = require('../modules/db1');
const util = require('../modules/util');

// variables pour bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* POST login. */
router.post('/login', function(req, res, next) { // TODO gestion des cookies/jwt !!!
    let email = req.body.email;
    let password = req.body.password;
    var user;
    const queryText = 'SELECT * FROM pfe.users WHERE email = $1';
    const values = [email];
    db.db.query(queryText,values).then((users)=>{
        user = users.rows[0];
        if(user == null){
            res.status(400).send('Wrong email !');
        }else{
            bcrypt.compare(password,user.password,function(err,result){
                if(result){
                    util.setToken(user.id_user,res);
                    res.json(user);
                }else{
                    res.status(400).send('Bad password for this email !');
                }
            });
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
    
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
    res.cookie('jwt',"", { maxAge: 0, httpOnly: true });
    res.end('logout');
});

/* PUT user */
router.put('/', function(req, res, next) {
    
    let user = req.body;
    let passwordHashed;
    const checkEmailQuery = 'SELECT COUNT(email) FROM pfe.users WHERE email = $1';
    const valuesQuery = [user.email];
    db.db.query(checkEmailQuery, valuesQuery).then((ret)=>{
        var nbr = ret.rows[0].count;
        console.log(nbr);
        if(nbr==0){
            bcrypt.hash(user.password,saltRounds,function(err,hash){
                passwordHashed = hash;
                const queryText = 'INSERT INTO pfe.users (pseudo,firstname,lastname,password,address,number,zip_code,city,country,email,phone,description) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *';
                const values = [user.pseudo,user.firstname,user.lastname,passwordHashed,user.address,user.number,user.zip_code,user.city,user.country,user.email,user.phone,user.description];
                db.db.query(queryText, values).then((users)=>{
                    var user = users.rows[0];
                    util.setToken(user.id_user,res);
                    res.send(user);
                }).catch((err) => {
                    console.log(err);
                    res.status(500).send(err);
                });
            });
        }else{
            console.log(nbr);
            res.status(500).send("Email already use");
        }
    })
    
    
    
});

/* UPDATE user*/
router.post('/update',function(req, res, next) {
    util.verifToken(req).then((decoded)=>{
        let user = req.body;
        const queryText = 'UPDATE pfe.users SET pseudo = $1, firstname = $2, lastname = $3, password = $4, address = $5, number = $6, zip_code = $7, city = $8, country = $9, email = $10, phone = $11, description = $12 WHERE id_user = $13 RETURNING *';
        const values = [user.pseudo,user.firstname,user.lastname,user.password,user.address,user.number,user.zip_code,user.city,user.country,user.email,user.phone,user.description,user.id_user];
        db.db.query(queryText, values).catch((err) => {
            res.status(500).send(err);
        });

    }).catch((err)=>{
        res.status(400).send('token check failed');
        console.error(err);
    });
});

/* Get select all user. */
router.get('/all', function(req, res, next) {
    util.verifToken(req).then((decoded)=>{
        const queryText = 'SELECT * FROM pfe.users';
        db.db.query(queryText).then((users)=>{
            res.json(users.rows);
        }).catch((err) => {
            res.status(500).send(err);
        });
    }).catch((err)=>{
        res.status(400).send('token check failed');
        console.error(err);
    });
});

module.exports = router;
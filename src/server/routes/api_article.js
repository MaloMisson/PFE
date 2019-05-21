const util = require('../modules/util');
var express = require('express');
var router = express.Router();
var db = require('../modules/db1');

/* GET all */
router.get('/', function(req, res, next) {
    const queryText = 'SELECT * FROM pfe.products';
    db.db.query(queryText).then((articles)=>{
        res.json(articles);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

/* GET single product */
router.get('/', function(req, res, next) {
    let product = req.body;
    const queryText = 'SELECT * FROM pfe.products WHERE id_product = $1';
    const values = [product.id_product];
    db.db.query(queryText,values).then((articles)=>{
        res.json(articles);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

/* PUT product */
router.put('/',function(req,res,next){
    let product = req.body;
    const queryText = 'INSERT INTO pfe.products (id_seller,id_category,name,description,state,price) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
    const values = [product.id_seller,product.id_category,product.name,product.description,product.state,product.price];
    db.db.query(queryText, values).catch((err) => {
        res.status(500).send(err);
    });
});

/* UPDATE product */
router.post('/update',function(req,res,next){
    let product = req.body;
    const queryText = 'UPDATE pfe.products SET name = $1, description = $2, state = $3, price = $4 WHERE id_product = $5 RETURNING *';
    const values = [product.name,product.description,product.state,product.price,product.id_product];
    db.db.query(queryText, values).catch((err) => {
        res.status(500).send(err);
    });
});

/*UPDATE categorie*/

module.exports = router;
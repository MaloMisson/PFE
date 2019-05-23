const util = require('../modules/util');
var express = require('express');
var router = express.Router();
var db = require('../modules/db1');

/* GET all */
router.get('/', function(req, res, next) {
    util.verifToken(req).then((decoded)=>{
        const queryText = 'SELECT * FROM pfe.sales';
        db.db.query(queryText).then((sales)=>{
            res.json(sales);
        }).catch((err) => {
            res.status(500).send(err);
        });
    }).catch((err)=>{
        res.status(400).send('token check failed');
        console.error(err);
    });
});

/* PUT sale */
router.put('/',function(req,res,next){
    util.verifToken(req).then((decoded)=>{
        let sale = req.body;
        const queryText = 'INSERT INTO pfe.sales (id_product,id_buyer,id_stripe) VALUES ($1,$2,$3) RETURNING *';
        const values = [sale.id_product,decoded.id,sale.id_stripe];
        db.db.query(queryText, values).catch((err) => {
            res.status(500).send(err);
        });
    }).catch((err)=>{
        res.status(400).send('token check failed');
        console.error(err);
    });
});

module.exports = router;
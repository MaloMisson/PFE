const util = require('../modules/util');
var express = require('express');
var router = express.Router();
var db = require('../modules/db1');

/* GET all */
router.get('/', function(req, res, next) {
    const queryText = 'SELECT * FROM pfe.sales';
    db.db.query(queryText).then((sales)=>{
        res.json(sales);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

/* PUT sale */
router.put('/',function(req,res,next){
    let sale = req.body;
    const queryText = 'INSERT INTO pfe.sales (id_product,id_buyer,id_stripe) VALUES ($1,$2,$3) RETURNING *';
    const values = [sale.id_product,sale.id_buyer,sale.id_stripe];
    db.db.query(queryText, values).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;
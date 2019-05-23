const util = require('../modules/util');
var express = require('express');
var router = express.Router();
var db = require('../modules/db1');

/* GET categories */
router.get('/', function(req, res, next) {
    const queryText = 'SELECT * FROM pfe.categories';
    db.db. db.query(queryText).then((categories)=>{
        res.json(categories.rows);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

/* PUT categorie */
router.put('/:name',function(req,res,next){
    util.verifToken(req).then((decoded)=>{
        const queryText = 'INSERT INTO pfe.categories (name) VALUES ($1) RETURNING *';
        const values = [req.params.name];
        db.db.query(queryText, values).catch((err) => {
            res.status(500).send(err);
        });

    }).catch((err)=>{
        res.status(400).send('token check failed');
        console.error(err);
    });
});

/* UPDATE categorie */
router.post('/:id/:name',function(req,res,next){
    util.verifToken(req).then((decoded)=>{
        const queryText = 'UPDATE pfe.categories SET name = $1 WHERE id_category = $2 RETURNING *';
        const values = [req.params.name,req.params.id];
        db.db.query(queryText, values).catch((err) => {
            res.status(500).send(err);
        });
    }).catch((err)=>{
        res.status(400).send('token check failed');
        console.error(err);
    });
});

module.exports = router;
const util = require('../modules/util');
var express = require('express');
var router = express.Router();

/* POST login. */
router.post('/new', function(req, res, next) {
    let article = req.body;
    res.send(article.color);
});

/* POST signin. */
router.post('/update', function(req, res, next) {
    let article = req.body;
    res.end('update article');
});

/* POST lougout. */
router.post('/buy', function(req, res, next) {
    res.end('buy article');
});

/* POST update. */
router.post('/remove', function(req, res, next) {
    res.end('remove article');
});

module.exports = router;
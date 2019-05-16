const util = require('../modules/util');
var express = require('express');
var router = express.Router();

/* POST login. */
router.post('/login', function(req, res, next) {
    res.end('login');
});

/* POST signin. */
router.post('/signin', function(req, res, next) {
    res.end('signin');
});

/* POST lougout. */
router.post('/logout', function(req, res, next) {
    res.end('logout');
});

/* POST update. */
router.post('/update', function(req, res, next) {
    res.end('update');
});

module.exports = router;
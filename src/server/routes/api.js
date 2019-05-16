const util = require('../modules/util');
var express = require('express');
var router = express.Router();

const APIConnectionRouter = require('./api_user');


/* GET home page. */
router.get('/', function(req, res, next) {
    util.printWarning('Test warnig');
    res.end('API hello world!');
});

module.exports = router;
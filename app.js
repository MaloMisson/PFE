#!/usr/bin/env node

var app = require('../app');
var http = require('http');

var server= http.createServer(app);
server.listen(8080);
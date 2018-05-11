#!/usr/bin/env node

var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(8888, function() {
    console.log('Frontend Server Running in ' + this.address().port+' port.');
});
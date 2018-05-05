var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('./public'));

app.all('/*', function(req, res) { res.sendFile(path.resolve('public/index.html')); });

module.exports = app;
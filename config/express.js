var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('./application'));
app.all('/*', function(req, res) { res.sendFile(path.resolve('application/index.html')); });

module.exports = app;


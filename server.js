var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(18889, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

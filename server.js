var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config.json');

// create server to handle requests
// express app allows routes
var app = express();

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(config.port, config.hostname, () => {

    console.log('server is running at http://interactivemaths.westeurope.cloudapp.azure.com:8080/' + config.hostname + ':' + config.port + '/');
});

app.get('/', function (req, res) {
    res.end('Interactive Maths server runs here\n');
});

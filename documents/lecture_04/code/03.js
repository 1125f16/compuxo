var express = require('express');
var app     = express();
var request = require('request');
var url     = 'http://provenance.mit.edu:8080/time';

app.get('/', function(requestClient, responseClient){
    request(url,function(error,response,body){
        responseClient.send(body);
    });
});

app.listen(3000);
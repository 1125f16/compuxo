var express = require('express');

var app = express();
app.get('/', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('my lucky number is ' + num);
});
app.get('/color', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('my lucky color is ' + num);
});
app.listen(8080, function() {
    console.log('Example app listening on port 8080');
});

// lets make an http.request to another machine
var http = require('http');
app.get('/mit', function(req, res) {
    var options = {
        host: 'www.mit.edu',
        path: ''
    };

    var callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function(chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function() {
            res.send(str);
            //console.log(str);
        });
    };

    http.request(options, callback).end();


});
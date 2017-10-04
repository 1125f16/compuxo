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
app.listen(9081, function() {
    console.log('Example app listening on port 9081');
});

// lets make an http.request to another machine
var http = require('http');
app.get('/mit', function(req, res) {
    var options = {
        host: 'data.cityofboston.gov',
        port: 80,
        path: '/api/views/sx2i-td3j/rows.json'
    };
    var callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function(chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function() {
            var obj = JSON.parse(str);
            var list = obj.data;
            var newlist = list.filter(greatercheck);
            res.send(newlist);
 
            //console.log(str);
        });
    };
    var greatercheck = function(row){
        return Number(row[18]) > 400000;
    };
    http.request(options, callback).end();


});
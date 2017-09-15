var express = require('express');

var app = express();
app.get('/', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('my lucky number is ' + num);
});
app.listen(9081, function() {
    console.log('Example app listening on port 9081');
});
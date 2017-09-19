var express = require('express');
var app 	= express();

// setup data parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.post('/caddie', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000);
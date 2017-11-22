var express = require('express');
var app     = express();

app.use(express.static('public'));

// used for form submissions
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// used for testing
app.get('/greetings',function(req,res){
	res.send({greeting : 'Hello World!'});
	res.end();
});

/* Handle Registration POST - body-parser module needed to parse form */
app.post('/signup', function(req, res){
	var message = {
        "username" : req.body.username, 
        "password" : req.body.password
    };
    console.log(message);
    console.log(req.body);    
	res.send({greeting : 'Hello World!'});
	res.end();    
});

// start server
app.listen(3000, function(){
	console.log('Listening on port 3000');
});

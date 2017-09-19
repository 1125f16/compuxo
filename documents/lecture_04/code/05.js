var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res){
    response.send('Hello World!');
});

app.post('/register', function(req,res){
    res.send({
        username : req.body.username,
        password : req.body.password    
    });
});

app.listen(3000);
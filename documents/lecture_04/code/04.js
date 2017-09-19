var express = require('express');
var app     = express();

app.get('/', function(request,response){
    response.send('Hello World!');
});

app.get('/time', function(request,response){
    response.send(new Date());
});

app.get('/user/:id/:age',function(request,response){
    response.send({id:request.params.id, 
        age:request.params.age});
});

app.get('/user',function(request,response){
    response.send(request.url);
});

app.listen(3000);
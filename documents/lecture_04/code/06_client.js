var request = require('request');

var data 	= {
	'username' : 'peterparker',
	'password' : 'spiderman'
};

var url = 'http://localhost:3000/caddie';

request.post(url, {form:data}, function(err,response,body){ 
	console.log(body);
});
var request = require('request');
var url     = 'http://provenance.mit.edu:8080/time';

request(url,function(error,response,body){
    console.log(body);
});
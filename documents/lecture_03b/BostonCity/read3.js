var http = require('http');
var options = {
    host: 'localhost',
    port: 8080,
    path: '/bostonsmall.json'
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
		console.log(newlist);
		console.log(newlist.length);
    });
};
var greatercheck = function(row){
	return Number(row[18])>= 200000;
};
http.request(options, callback).end();






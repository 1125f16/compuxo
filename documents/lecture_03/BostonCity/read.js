var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('bostonsmall.json', 'utf8'));
var list = obj.data;


var greatercheck = function(row){
	return parseInt(row[18])>= 100000;
};

var newlist = list.filter(greatercheck);
console.log(newlist);
console.log(newlist.length);
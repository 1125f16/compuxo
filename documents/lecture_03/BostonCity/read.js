var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('bostonsmall.json', 'utf8'));
var list = obj.data;


var greatercheck = function(row){
	if(row[18]>= 100000)
	return row;
};

var newlist = list.filter(greatercheck);
console.log(newlist);
console.log(newlist.length);
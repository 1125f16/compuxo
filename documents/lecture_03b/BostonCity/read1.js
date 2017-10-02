var obj = require('./bostonsmall.json');

var list = obj.data;


var greatercheck = function(row){
	return parseInt(row[18])>= 100000;
};

var newlist = list.filter(greatercheck);
console.log(newlist);
console.log(newlist.length);
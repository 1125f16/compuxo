var obj = require('./bostoncitydata.json');

var list = obj.data;


var greatercheck = function(row){
	return parseInt(row[18])>= 400000;
};

var newlist = list.filter(greatercheck);
console.log(newlist);
console.log(newlist.length);
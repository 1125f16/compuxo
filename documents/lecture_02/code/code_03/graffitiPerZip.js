var graffiti = require('./graffiti_july_2015.json');
var zipCodes = require('./zipCodes.js');

var graffitiPerZip = [];
var matching;
var obj;

function graffitiReports(zip) {
	matching = graffiti.data.filter(function(report){
		// ---------------------------
		//		YOUR CODE
		// ---------------------------
	});

	obj = {};
	obj.zip = zip;
	obj.reports = matching.length;
	graffitiPerZip.push(obj);
}

zipCodes.forEach(graffitiReports);
console.log(graffitiPerZip);

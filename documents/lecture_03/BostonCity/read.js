var fs = require('fs');
var obj = JSON.parse(
    fs.readFileSync('bostoncitydata.json', 'utf8'));
var list = obj.data;
var myList = list.filter(greater);

function greater(row) {
    return Number(row[18]) >= 300000;
}
console.log(myList);
console.log(myList.length);
var employees = [
  {name: 'peter', salary: '100000'},
  {name: 'bruce', salary: '125000'},
  {name: 'hanna', salary: '250000'}
];

var salaries = 0;
function add(item,i,list){
	salaries += Number(item.salary);
}

employees.forEach(add);
console.log(salaries);
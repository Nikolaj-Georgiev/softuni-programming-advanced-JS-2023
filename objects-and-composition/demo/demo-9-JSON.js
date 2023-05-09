const parsed = '{ "employees": [{ "firstName": "John", "lastName": "Doe" }, { "firstName": "Anna", "lastName": "Smith" }, { "firstName": "Peter", "lastName": "Jones" }]}';
const employees = JSON.parse(parsed)
let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }';
let obj = JSON.parse(data);
console.log(obj.manager.lastName) // Doe 
console.log(employees.employees[1].firstName);

let obj1 = { name: "John", age: 30, city: "New York" };
let myJSON = JSON.stringify(obj1);
console.log(myJSON);// {"name":"John","age":30,"city":"New York"}

let arr = ["John", "Peter", "Sally", "Jane"];
let myJSON1 = JSON.stringify(arr);
console.log(myJSON1); // ["John","Peter","Sally","Jane"]
console.log(typeof myJSON1);
let arr1 = JSON.parse(myJSON1);
console.log(arr1[2]);
console.log(typeof arr1);

let myJSON2 = JSON.stringify(arr, null, 2);
console.log(myJSON2);

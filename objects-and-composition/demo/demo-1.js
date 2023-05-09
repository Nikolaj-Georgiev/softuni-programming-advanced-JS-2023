function test() {

const person = {
    name: 'Peter',
    age: 23,
    'middle name': 'Petrun'
}

console.log(person.name);

person.name = 'John';

console.log(person.name);

person.lastName = 'Jackson';

console.log(person);

console.log(person['age']);

const propName = 'age';

console.log(person[propName]);

person[propName] = 24;

console.log(person);

//също може и да се направи с конкатениране на стринг, важното е когато интерпретатора стигне до там да се изведе отнякъде някакъв стриндг! пр.:

const propName1 = 'a' + 'ge';

console.log(person[propName1]);

//връща 24, защото когато стигне до него, интерпретатора намира стринга 'age'.

// const middleName = 'middle name';

// person[middleName] = 'Petrun';

// console.log(person[middleName]);

console.log(person);

//свойствата, които не са обявени са undefined. пр.:
const weight = 'weight';

console.log(person[weight]);


}

test();
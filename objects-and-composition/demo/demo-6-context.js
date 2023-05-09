const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName()); // 'Peter Johnson'

const getFullName = person.fullName;
console.log(getFullName()); // 'undefined undefined'
const anotherPerson = {
    firstName: 'Bob',
    lastName: 'Smith'
};
anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName()); // 'Bob Smith'

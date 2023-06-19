function createPerson(firstName, lastName){
    const result = {
        firstName,
        lastName,
    };
   let fullName; 
    Object.defineProperty(result, 'fullName', {
        get(){return `${result.firstName} ${result.lastName}`},
        set(value){
            if(value.split(' ').length !== 2) {
                return fullName;
            }
            fullName = value;
            result.firstName = value.split(' ')[0];
            result.lastName = value.split(' ')[1];
            
        },
        enumerable: true,
        configurable: true,
    });

    return result;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.firstName);
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); 
console.log(person.fullName); 
console.log(person);
person.fullName = 'Gosho';
console.log(person.fullName);

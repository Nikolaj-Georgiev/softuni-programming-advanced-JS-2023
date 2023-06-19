function createPerson(firstName, lastName){
    const result = {
        firstName,
        lastName,
        // fullName: `${firstName} ${lastName}` // това може да се сложи заради интели сенса
    };
    Object.defineProperty(result, 'fullName', {
        get(){return `${this.firstName} ${this.lastName}`},
        set(value){
            if(value.split(' ').length !== 2) {
                return `${firstName} ${lastName}`;
            }
            fullName = value;
            result.firstName = value.split(' ')[0];
            result.lastName = value.split(' ')[1];
            
        },
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
console.log(person);

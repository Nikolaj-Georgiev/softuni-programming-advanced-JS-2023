function personAndTeacher(){
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        saiHello(){
            return `${this.name} says hello`;
        }
    };

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }
    const result = {
        Person,
        Teacher
    }

    return result;
}

let test = personAndTeacher();
let obj = new test.Person('Pesho', 'asd@abv.bg');
let obj1 = new test.Teacher('Gosho', 'asd@abv.bg', 'babun');

console.log(obj.saiHello());
console.log(obj1.saiHello());
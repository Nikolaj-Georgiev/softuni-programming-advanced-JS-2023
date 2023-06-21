function toStringExtension() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        saiHello() {
            return `${this.name} says hello`;
        }

        trickster(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email}`
        }
        toString() {
            return `${this.trickster()})`;
        }
    };

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString(){
            return `${super.trickster()}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString(){
            return `${super.trickster()}, course: ${this.course})`
        }
    }
    const result = {
        Person,
        Teacher,
        Student
    }
    return result;
}
let classes = toStringExtension();
let p = new classes.Person('Pesho', 'pesho@AbortController.bg');
let t = new classes.Teacher('Stamat', 'Stamat43@pornthub.com', 'Mathematics');
let s = new classes.Student('Galjo', 'Gosheto@yahoo.com', 'JavaScript');
console.log(p.toString());
console.log(t.toString());
console.log(s.toString());
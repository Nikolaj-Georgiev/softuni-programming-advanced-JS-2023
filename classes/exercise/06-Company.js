class Company{
    constructor(){
        this.departments = new Map();
    }

    static Employee = class Employee{
        constructor(name, salary, position) {
            this.name = name;
            this.salary = salary;
            this.position = position;
        }

        compareTo(otherWorker) {
            let result = otherWorker.salary - this.salary;
            if (result === 0) {
                return this.name.localeCompare(otherWorker.name);
            }
            return result;
        }
    }

    addEmployee(name, salary, position, department){
        let argsArr = [name, salary, position, department];
        let checker = (arg) => arg !== null && arg !== undefined && arg !== '';
        let notInvalid = argsArr.every(checker);
        if (notInvalid) {
            if (salary < 0) {
                throw new Error("Invalid input!");
            }
            let localeWorker = new Company.Employee(name, salary, position);
            if(!this.departments.has(department)) {
                this.departments.set(department, []);
            }
            this.departments.get(department).push(localeWorker);
           return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
        throw new Error("Invalid input!");
    }

    bestDepartment(){
        let salaryChecker = [];
        this.departments.forEach((value, key) => {
            let averageSalary = value.reduce((a, c) => a + c.salary, 0) / value.length;
            salaryChecker.push([key, averageSalary]);
        })
        salaryChecker.sort((a,b) => b[1] - a[1]);
        let result = `Best Department is: ${salaryChecker[0][0]}\nAverage salary: ${salaryChecker[0][1].toFixed(2)}\n`;
        let workers = this.departments.get(salaryChecker[0][0]).sort((a, b) => a.compareTo(b)).map(w => `${w.name} ${w.salary} ${w.position}`);
        workers.forEach(w => result += w +'\n');
        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

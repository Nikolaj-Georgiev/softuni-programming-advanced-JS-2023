function demo2() {

    const department = {
        name: 'Engineering',
        director: 'Ted Thompson',
        employeeCount: 25
    };

    const { name, employeeCount } = department;

    console.log(name, employeeCount);
    console.log(department.employeeCount);
    department.employeeCount = 26;
    console.log(employeeCount);
    console.log(department.employeeCount);


    //references -> variables holding reference data types contain MEMORY ADDRESS (REFERENCE) of the data! Copies of the reference point to the same data:

    let x = { name: 'John' };
    let y = x;
    console.log(x);
    console.log(y);
    y.name = 'Steve';
    console.log(x.name); // now x.name is also 'Steve' because both variables point to the same place in the memory(heap)

    // comparison - two objects are the same, only if the variables holding them are pointing to the same place in the memory. пример:

    console.log(x === y); // връща true;
    // ако два обекта не сочат към едно и също място, то те не са еднакви, без значение дали всички ключове и стойности в тях са еднакви. Пример: 
    const fruit = { name: 'apple' };
    const fruitbear = { name: 'apple' };    
    console.log(fruit === fruitbear); // връща false;


}

demo2()
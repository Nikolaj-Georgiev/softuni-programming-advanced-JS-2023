function cityRecord(name, population, treasury) {
     const city = {
        name, // това е съкратен запис на name: name,
        population,
        treasury
    };
    return city;

}

let test1 = cityRecord('Tortuga', 7000, 15000);
let test2 = cityRecord('Santo Domingo', 12000, 23500);

console.log(test1.treasury);
console.log(test2);

test1.weather = 'Sunny';

console.log(test1.weather);
console.log(test1.weather = 'nice');
console.log(test1);
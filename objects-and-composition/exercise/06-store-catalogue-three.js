function storeCatalogue(input) {
    const object = {}
    let sortedInput = input.sort((a, b) => a.localeCompare(b)).map(line => line.split(' : '));
    sortedInput.forEach(element => {
        let letter = element[0][0];
        if (!object[letter]) {
            object[letter] = {};
        }
        let product = element[0];
        let price = element[1];
        // object[letter][element[0]] = element[1];
        object[letter][product] = price;
    });

    for (const letter of Object.keys(object)) {
        console.log(letter);
        for (const product of Object.keys(object[letter])) {
            console.log(`  ${product}: ${object[letter][product]}`);
        } 
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
console.log('++++++++++++++++');
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);
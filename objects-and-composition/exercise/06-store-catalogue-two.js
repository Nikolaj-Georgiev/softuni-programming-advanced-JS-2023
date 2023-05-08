function storeCatalogue(input) {

    const result = Object.fromEntries(input
        .sort((a, b) => a.localeCompare(b))
        .map(line => line
            .split(' : ')
            .map(x => isNaN(x) ? x : Number(x))));
    let chapterLetter = Object.keys(result)[0][0];
    console.log(chapterLetter);
    for (const key in result) {
        if (key[0] !== chapterLetter) {
            chapterLetter = key[0];
            console.log(chapterLetter);
        }
        console.log(`  ${key}: ${result[key]}`);
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
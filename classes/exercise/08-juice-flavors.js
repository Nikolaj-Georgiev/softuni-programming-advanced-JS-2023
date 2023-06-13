function juiceFlavors(input) {
    const juiceBottles = new Map();
    const juice = new Map();

    input.forEach(line => {
        let [juiceFlavour, juiceQuantity] = line.split(' => ');
        juiceQuantity = +juiceQuantity;
        if (!juice.has(juiceFlavour)) {
            juice.set(juiceFlavour, 0);
        }
        let addedJuice = juice.get(juiceFlavour) + juiceQuantity;
        juice.set(juiceFlavour, addedJuice);
        if (addedJuice >= 1000) {
            if (!juiceBottles.has(juiceFlavour)) {
                juiceBottles.set(juiceFlavour, 0);
            }
            let bottlesQuantity = addedJuice / 1000 | 0;
            let addedBottles = juiceBottles.get(juiceFlavour) + bottlesQuantity;
            juiceBottles.set(juiceFlavour, addedBottles);
            juice.set(juiceFlavour, juiceQuantity % 1000);
        }
    });
    let result = []
    juiceBottles.forEach((value, key) => result.push(`${key} => ${value}`));
    return result.join('\n');
}

console.log(juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
));
console.log('...................')
console.log(juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));
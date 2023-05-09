function lowestPrices(input) {
    const result = {};
    input.forEach(element => {
        let [townName, productName, productPrice] = element.split(' | ').map(x => isNaN(x) ? x : Number(x));
        if (result[productName]) {
            if (productPrice >= result[productName]['productPrice']) {
                productPrice = result[productName]['productPrice'];
                townName = result[productName]['townName'];
            }
        }
        result[productName] = { townName, productPrice };
    });

    Object.keys(result).forEach(product => {
        console.log(`${product} -> ${result[product].productPrice} (${result[product]['townName']})`);
    });
}

lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'Sofia | Peach | 1',
    'Sofia | Orange | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);

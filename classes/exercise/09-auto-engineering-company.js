function autoCompany(input) {
    const carBrands = new Map();

    input.forEach(line => {
        let [brand, model, carsQuantity] = line.split(' | ');
        carsQuantity = Number(carsQuantity);
        if (!carBrands.has(brand)) {
            carBrands.set(brand, new Map([[model, 0]]));
        }
        let isModelExist = [...carBrands.get(brand).keys()].some(key => key === model);
        if (!isModelExist) {
            carBrands.get(brand).set(model, 0);
        }
        let hujnja = carBrands.get(brand);
        let cars = hujnja.get(model) + carsQuantity;
        hujnja.set(model, cars);
    });
    carBrands.forEach((cars, carBrand) => {
        console.log(carBrand);
        cars.forEach((quantity, model) => {
            console.log(`###${model} -> ${quantity}`);
        }
        );
    });
}

// autoCompany(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'Audi | Q6 | 1001',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']
// );

autoCompany(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200']);
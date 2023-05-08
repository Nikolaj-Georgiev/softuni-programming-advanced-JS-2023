function carFactory(orderObject) {
    const car = {
        model: '',
        engine: {},
        carriage: {},
        wheels: [],

        assignModel(order) {
            this.model = order.model;
        },

        choseEngine(order) {
            if (order.power <= 90) {
                this.engine = { power: 90, volume: 1800 };
            } else if (order.power > 90 && order.power <= 120) {
                this.engine = { power: 120, volume: 2400 };
            } else if (order.power > 120) {
                this.engine = { power: 200, volume: 3500 };
            }
        },

        choseCarriage(order) {
            this.carriage.type = order.carriage;
            this.carriage.color = order.color;
        },

        wheelsPlacer(order) {
            if (order.wheelsize % 2 === 0) {
                Math.floor(order.wheelsize--);
            }
            for (let i = 1; i <= 4; i++) {
                this.wheels.push(order.wheelsize);
            }
        }

    }

    car.assignModel(orderObject);
    car.choseEngine(orderObject);
    car.choseCarriage(orderObject);
    car.wheelsPlacer(orderObject);

    return car;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log('++++++++++++++');
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));

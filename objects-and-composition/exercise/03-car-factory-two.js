function carFactory(orderObject) {

    const engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];
    const carriages = [{type: orderObject.carriage, color: orderObject.color}, {type: orderObject.carriage, color: orderObject.color}];
    let wheelsize = orderObject.wheelsize % 2 === 1? orderObject.wheelsize : --orderObject.wheelsize;

    return {
        model: orderObject.model,
        engine: engines.filter(e => e.power >= orderObject.power)[0],
        carriage: carriages.filter( c => c.type === orderObject.carriage)[0],
        wheels: new Array(4).fill(wheelsize)
    }
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

function fruit(fruit, weightGrams, priceKg) {
    let weight = weightGrams / 1000;
    let money = weight * priceKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
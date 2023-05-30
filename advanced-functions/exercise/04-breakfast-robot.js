function solution() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    const quantumStorage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    const helperFuncs = {
        restock(args) {
            quantumStorage[args[0]] += Number(args[1]);
            return helperFuncs.message();
        },
        prepare(args) {
            let iterations = Number(args[1]);
            let food = args[0];
            let products = Object.entries(recipes[food]);
            for (let i = 0; i < iterations; i++) {
                let missingProduct = products.find(tuple => quantumStorage[tuple[0]] < Number(tuple[1]));
                if (!(missingProduct === undefined)) {
                    return helperFuncs.message(missingProduct[0]);
                }
                products.forEach(tuple => quantumStorage[tuple[0]] -= Number(tuple[1]));
            };
            return helperFuncs.message();
        },
        report() {
            let result = Object.entries(quantumStorage).map(tuple => `${tuple[0]}=${tuple[1]}`);
            return result.join(' ');
        },
        message(arg) {
            return result = arg === undefined ? 'Success' : `Error: not enough ${arg} in stock`;
        },
    }

    function robot(string) {
        const [command, ...args] = string.split(' ');
        let result = helperFuncs[command](args);
        return result;
    }
    return robot;
}

let babaluga = solution();
console.log(babaluga("restock flavour 50")); // Success 
console.log(babaluga("prepare lemonade 4")); // Error: not enough carbohydrate in stock


console.log('++++++++++++++++');
let manager = solution();
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock protein 10")); // Success 
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); 

function simpleOperations() {
    const operations = {
        '+'(arr){
            arr = arr.reduce((a, v) => a + v);
            return arr;
        },
        '-'(arr){
            arr = arr.reduce((a, v) => a - v);
            return arr;
        },
        '/'(arr){
            arr = arr.reduce((a, v) => a / v);
            return arr;
        },
        '*'(arr){
            arr = arr.reduce((a, v) => a * v);
            return arr;
        },
    };

    return operations;

}

const nums = [1, 2];

const action = simpleOperations();
let operator = '+';
let operator1 = '-';
let operator2 = '*';
let operator3 = '/';
console.log(action[operator](nums));
console.log(action[operator1](nums));
console.log(action[operator2](nums));
console.log(action[operator3](nums));



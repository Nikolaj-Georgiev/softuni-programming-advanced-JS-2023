function sum(n, m) {
let numOne = Number(n);
let numTwo = Number(m);
// let start = Math.min(numOne, numTwo);
// let end = Math.max(numOne, numTwo);
let result = 0;

for (let i = numOne; i <= numTwo; i++) {
    result += i;
}

return result;
}

console.log(sum('1', '5'));
console.log(sum('-8', '20'));
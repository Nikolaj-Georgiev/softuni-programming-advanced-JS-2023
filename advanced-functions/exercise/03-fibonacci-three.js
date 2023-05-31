function getFibonator() {
    return (function () {
        const next = this.prev + this.curr;
        this.prev = this.curr;
        this.curr = next;
        return this.prev;
    }).bind({
        prev: 0,
        curr:1
    })
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

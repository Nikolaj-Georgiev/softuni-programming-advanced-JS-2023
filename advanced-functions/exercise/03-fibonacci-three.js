function getFibonator() {
    return (function () {
        const temp = this.cur + this.next;
        this.cur = this.next;
        this.next = temp;
        return this.cur;
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

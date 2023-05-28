function solution() {
    let string = '';
    return {
        append: (str) => string += str,
        removeStart: (num) => string = string.substring(num),
        removeEnd: (num) => string = string.slice(0,-num),
        print: () => console.log(string)
    }
}



let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();


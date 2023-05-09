function janNotations(input) {
    const result = [];
    input.forEach(element => {
        isNaN(element) ? command(element) : result.push(element);
    });

    if (result.length > 1) {
        console.log('Error: too many operands!');
        return;
    }
    
    console.log(result[0] ? result[0] : '');

    function takeLastTwo(arr) {
        if (arr.length >= 2) {
            let local = arr.slice(-2);
            return local;
        }
        return "Error: not enough operands!";
    }

    function command(operator) {
        let newValue = 0;
        const action = operations();
        let operationValue = takeLastTwo(result);
        operationValue.length > 2 ? console.log(operationValue) : newValue = action[operator](operationValue);
        result.splice(-2, 2, newValue);
    }

    function operations() {
        const operationsObj = {
            '+'(arr) {
                arr = arr.reduce((a, v) => a + v);
                return arr;
            },
            '-'(arr) {
                arr = arr.reduce((a, v) => a - v);
                return arr;
            },
            '/'(arr) {
                arr = arr.reduce((a, v) => a / v);
                return arr;
            },
            '*'(arr) {
                arr = arr.reduce((a, v) => a * v);
                return arr;
            },
        };
        return operationsObj;
    }
}

janNotations([3, 4, '+']);
console.log('++++++++++');
janNotations([5, 3, 4, '*', '-']);
console.log('+++++++++++++');
janNotations([7, 33, 8, '-']);
console.log('+++++++++++++');
janNotations([15, '/']);
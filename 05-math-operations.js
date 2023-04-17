function mathOps(numOne, numTwo, operator) {
    let result;
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    switch (operator) {
        case '+': result = numOne + numTwo;break;
        case '-': result = numOne - numTwo;break;
        case '*': result = numOne * numTwo;break;
        case '/': result = numOne / numTwo;break;
        case '%': result = numOne % numTwo;break;
        case '**': result = numOne ** numTwo;break;
    }
    
    console.log(result);
}

mathOps(5, 6, '+');
mathOps(3, 5.5, '*');
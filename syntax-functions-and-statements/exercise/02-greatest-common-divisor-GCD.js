function greatestCommonDivisor(firstNumber, secondNumber) {

    while (firstNumber !== secondNumber) {
        (firstNumber > secondNumber) ? firstNumber -= secondNumber: secondNumber -= firstNumber;
    }

    console.log(firstNumber);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
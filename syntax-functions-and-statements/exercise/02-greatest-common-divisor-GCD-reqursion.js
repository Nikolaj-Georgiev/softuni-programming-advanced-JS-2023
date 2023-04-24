function greatestCommonDivisor(firstNumber, secondNumber) {

    if (secondNumber) {
        return greatestCommonDivisor(secondNumber, firstNumber % secondNumber);;
    } else {
        console.log(firstNumber);
    }

}

// greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
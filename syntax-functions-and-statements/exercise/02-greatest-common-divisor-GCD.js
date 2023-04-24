function greatestCommonDivisor(firstNumber, secondNumber) {

    while (firstNumber !== secondNumber) {
        // if (firstNumber > secondNumber) {
        //     firstNumber = firstNumber - secondNumber;
        // } else {
        //     secondNumber = secondNumber - firstNumber;
        // }
        (firstNumber > secondNumber) ? firstNumber -= secondNumber: secondNumber -= firstNumber;

    }

    console.log(firstNumber);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
function sameNumbers(number) {
    let numAsArr = number.toString().split('').map(Number);
    let lenChecker = numAsArr.length;
    let checkedArr = numAsArr.filter(x => x === numAsArr[0]);
    let sumOfDigits = numAsArr.reduce((a, c) => a + c, 0);
    lenChecker === checkedArr.length ? console.log(true) : console.log(false);
    console.log(sumOfDigits);
}

sameNumbers(2222222);
sameNumbers(1234);
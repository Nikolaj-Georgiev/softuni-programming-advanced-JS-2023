function validityCheck(x1, y1, x2, y2) {

    print(validator(x1, y1, 0, 0), x1, y1, 0, 0);
    print(validator(x2, y2, 0, 0), x2, y2, 0, 0);
    print(validator(x1, y1, x2, y2), x1, y1, x2, y2);

    function validator(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    function print(validationF, x1, y1, x2, y2) {
        if (Number.isInteger(validationF)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

}

validityCheck(3, 0, 0, 4);
console.log('+++++++++++++++++++');
validityCheck(2, 1, 1, 1);
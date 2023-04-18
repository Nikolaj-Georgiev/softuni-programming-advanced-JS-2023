function stringLength(firstString, secondString, thirdString) {

    let resultLength = (firstString + secondString + thirdString).length;
    console.log(resultLength);
    console.log(resultLength / 3 | 0);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
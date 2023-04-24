function largestNumber(...n) {
    console.log(`The largest number is ${Math.max(...n)}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

function lN(n1, n2, n3) {
    let result;
    if (n1 > n2 && n1 > n3) {
        result = n1;
    } else if(n2 > n1 && n2 > n3) {
        result = n2;
    } else {
        result = n3;
    }

    console.log(`The largest number is ${result}.`);
}

lN(5, -3, 16)
lN(-3, -5, -22.5)
function pieceOfPie(piesArray, firstFlavour, secondFlavour) {

    const result = piesArray.slice(piesArray.indexOf(firstFlavour), piesArray.indexOf(secondFlavour) + 1);
    return result;

}

let test1 = pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
let test2 = pieceOfPie(
    ['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie');

console.log(test1);
console.log(test2);
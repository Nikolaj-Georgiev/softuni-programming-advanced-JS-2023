function calorieObject(stringArr) {
    const result = {};
    for (let i = 0; i < stringArr.length; i+= 2) {
        result[stringArr[i]] = Number(stringArr[i + 1]);
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
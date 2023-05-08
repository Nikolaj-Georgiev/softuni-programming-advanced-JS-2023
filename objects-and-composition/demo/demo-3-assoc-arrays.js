function assocArr() {
    const obj = { a: 1, b: 2, c: 4 };
    obj.c--;
    for (const key in obj) {
        console.log(`obj.${key} = ${obj[key]}`);
    }

    const myDic = {
        'John': '+1-555-3540',
        'Mary': '+1-555-2121',
        'Bob': '+1-555-3534',
    };

    for (const key in myDic) {
        console.log(key, myDic[key]);
    }

   const keys = Object.keys(myDic);
   console.log(keys);

   const values = Object.values(myDic);
   console.log(values);

   const entries = Object.entries(myDic);
   console.log(entries);
}

assocArr();
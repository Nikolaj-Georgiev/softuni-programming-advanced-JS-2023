function methods() {

    function sayHi() {
        console.log(`${this.name} says hi!`);
    }

    const person = {
        name: 'Peter',
        age: 23,
        /* това е дългия начин за записване на функция, но защото в обекта може да има само свойство или метод, 
        можем да ползваме съкратен запис като само добавим () след името и интерпретатора
        го разпознава като метод.

        sayHi: function () {
            console.log('Hello!');
        }
        това е по-кратък начин:
        sayHi() {console.log(`${this.name} says hi!`);}
        */
        sayHi
    }

    const person2 = {
        name: 'John',
        sayHi
    };

    /* може вместо да се добавят след това,
     предварително да си ги добавим в обектите само като име и те ще си работят, защото сочат към една и съща функция.
     виж sayHi в обектите!
     
     person.sayHi = sayHi;
     person2.sayHi = sayHi;
     */
  
    //  пример, че фунция от обект може да се извади отвън в променлива и пак да работи.
    // const myFunc = person.sayHi;
    // console.log(typeof myFunc);
    // myFunc();

    person.sayHi();
    person2.sayHi();

    console.log(person.sayHi === person2.sayHi);
    //това е true, защото и двата метода сочат към една и съща функция.




}

methods();
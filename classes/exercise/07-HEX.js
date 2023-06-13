class Hex {
    constructor(value){
        this.value = value;
    }

    get value(){
        return this._value;
    }
    set value(value){
        if (value === null || value === undefined || !Number.isInteger(value)) {
            throw new Error('Babalugaaaa');
        }
        this._value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        let hex = '0x' + (this.value.toString(16).toUpperCase());
        return hex;
    }

    plus(num){
        let result = this.value + num;
        return new Hex(result);
    }

    minus(num){
        let result = this.value - num;
        return new Hex(result);
    }

    parse(string) {
        let result = parseInt(string, 16);
        return result;
    }
}


let t1 = new Hex(255);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.minus(b).toString());
console.log(t1.parse('AAA'));
console.log(t1.valueOf());
console.log(t1.toString());

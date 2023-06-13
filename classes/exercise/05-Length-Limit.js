class Stringer{
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(num){
        this.innerLength += num;
    };
    decrease(num){
        if(this.innerLength - num < 0) {
            this.innerLength = 0;
            return;
        }
        this.innerLength -= num;
    };
    toString(){
        if (this.innerString.length === this.innerLength) {
           return this.innerString;
        } else if (this.innerLength > this.innerString.length) {
            return this.innerString;
        } else {
            let truncatingNum = this.innerString.length - this.innerLength;
            let localString = this.innerString.slice(0,-truncatingNum) + '...';
            return localString;
        }
    };
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

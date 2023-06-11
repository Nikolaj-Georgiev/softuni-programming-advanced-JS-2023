class List{
    constructor(){
        this.list = [];
        this.size = 0;
    }

    add(element){
        this.list.push(element);
        this.size++;
        this.list.sort((a, b) => a - b);
    };
    remove(index){
        index = this.validator(index);
        this.list.splice(index, 1);
        this.size--;
        this.list.sort((a, b) => a - b);
    };
    get(index){
        index = this.validator(index);
        return this.list[index];
    };

    validator(index) {
        if(index < 0 || index >= this.list.length || Number.isInteger(index) === false) {
            throw new Error('Invalid index!');
        }
        return index;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

let myList = new List();
myList.add(5);
myList.add(3);
console.log(myList.get(0))
// expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

myList.remove(0);
console.log(myList.get(0));
// expect(myList.get(0)).to.equal(5, "Element wasn't removed");
console.log(myList.size);
// expect(myList.size).to.equal(1, "Element wasn't removed");
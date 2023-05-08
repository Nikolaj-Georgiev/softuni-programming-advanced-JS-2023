function createSortedList() {
    const list = {
        collection: [],
        size: 0,
        add(el) {
            this.collection.push(el);
            this.collection.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index < 0 || index >= this.collection.length) {
                return;
            }
            this.collection.splice(index, 1);
            this.collection.sort((a, b) => a - b);
            this.size--;
        },
        get(index) {
            if (index < 0 || index >= this.collection.length) {
                return;
            }
            return this.collection[index];
        },
    }
    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);
list.add(10);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(5));
console.log(list.size);

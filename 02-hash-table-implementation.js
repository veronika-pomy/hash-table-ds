// this implementation loses values when collisions happen - bad data structure example, happnes due to very simple hash function

class HashTable {
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        // logic to convert str to number
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        // ensure the index returned is within the bounds of the array size inclusive
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        // could check if the value exists before deleting as well
        this.table[index] = undefined;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            };
        }
    }
}

const table = new HashTable(50);

table.set('name', 'John');
table.set('age', 45);
table.display(); // logs - 1 45 and 17 John

console.log(table.get('name')); // logs John

table.remove('name');

table.display(); // logs - 1 45 
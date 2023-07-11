// Approach`: at index, instead of storing a value, store an array of values

class HashTable {
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value;
        const bucket = this.table[index];
        // case where there is no prev value stored
        if (!bucket) {
            this.table[index] = [[key, value]];
        // case where there is already a value stored
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key); // check if array contains sub array with the same key, item[0] is key
            // if smaeKeyItem exists, update value
            if(sameKeyItem) {
                sameKeyItem[1] = value;
            // if not, we can push key value pair
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        // return this.table[index];
        const bucket = this.table[index];
        //if bucket exists, check if an array exists with the same key
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                return sameKeyItem[1]; // if same key item exists, return the value
            }
        } 
        // othewise return undefined because the key does not exist in this case
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        // if bucket exists, check to see if an array exists with the same key
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            // if the same key item exists, use array splice method to remove item from array
            if(sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
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

table.set('mane', 'Alan');
table.display(); // logs 1 45 and 17 [['name', 'John'], ['mane, 'Alan']] - array has two sub arrs

table.set('name', 'Phil'); // overwrite John with Phil
table.display(); // logs 1 45 and 17 [['name', 'Phil'], ['mane, 'Alan']]

table.remove('name'); // remove name key value pair
table.display(); // logs 1 45 and 17 ['mane, 'Alan']]

// Notes on Hash Table Size and Collisions
        // Simply increasing the size of the table to handle collisions won't work, because it can still result in data loss
        // typically when the table reaches half the size of the capacity - array capacity is doubled, and key value pairs are rehashed 

// Time Complexity
    // get, set, and remove use find method - it loops over the els in the array 
    // this means the time complexity is linear
    // however in hash tables collisions are kept to a minimum by using good hashing functions
// Generally considre average time complexity for this data structure instead of the worst 
    // Avg Time Complexity is constant - O(1)
    // Due to this factor, hash tables are very good choice for solving problems
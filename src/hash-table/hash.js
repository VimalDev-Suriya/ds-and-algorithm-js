/**
 * Hash Table.
 * 
 * A DS which stores the values in the Key-Value pair. Where we will be using the hash functions to generate the unique position
 * 
 * A function, which generates the unique index in the Hash table. Below are the 3 data points that every hash function should have
 * - Always contant time - Should return the hash in contant time
 * - Mostly the result should be wide spreaded (uniformly distributed) i.e we should avoid collision
 * - Should generate same output for same set of inputs.
 * - The genarated output should be resulted in the input, if we somehow decode the output.
 * 
 * Handling the collision
 * 1. Linear probing - adding only one data in the table, if there is a collison, then need to add the data into next empty place.
 * 2. Separate chaining - pushing the data in the same position in [];
 */

// * BELOW HASH ONLY WORK FOR STR.
const hash = (key) => {
    let total = 0;
    let prime = 19;
    let hashTableLength = 10;

    for(let i=0; i< Math.min(key.length, 50); i++){
        // * 96 is actually a ASCII number of "a"
        total += key.charCodeAt(i) - 96;
    }

    // * multiplying with rpime will reduce the collison drastically.
    // * having the prime number of length of hash table
    return (total * prime) %  hashTableLength;
}

class HashTable{
    // * mostly setting the len in prime numbers
    constructor(len = 17){
        this.hashTable = new Array(len);
        this.size = len
    }

    hash(key){
        let total = 0;
        let WEIRD_PRIME = 7;

        for(let i=0; i< Math.min(key.length, 53); i++){
            total += key.charCodeAt(i);
        }

        return (total * WEIRD_PRIME) % this.size
    }

    // * Handling the collision using separate chaining
    set(key, value){
        const idx = this.hash(key);

        if(!this.hashTable[idx]) this.hashTable[idx] = [];

        this.hashTable[idx].push([key, value]);
    }

    get(key){
        const idx = this.hash(key);

        const value= this.hashTable[idx];

        if(!value) return undefined;

        // * O(n)
        return value.find(k => k[0] === key)?.[1];
    }

    keys(){
        const result = [];

        // O(n^2)
        for(let i=0;i<this.size; i++){
            if(this.hashTable[i]){
                for(let j=0; j<this.hashTable[i].length; j++){
                    result.push(this.hashTable[i][j][0])
                }
            }
        }

        return result
    }

    values(){
        const result = [];

        for(let i=0;i<this.size; i++){
            if(this.hashTable[i]){
                for(let j=0; j<this.hashTable[i].length; j++){
                    result.push(this.hashTable[i][j][1])
                }
            }
        }

        return result
    }
}


const ht = new HashTable(11);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")

console.log(JSON.stringify(ht.hashTable))
console.log(ht.get('maroon'))
console.log(ht.get('lightcoral'));
console.log('keys', ht.keys())
console.log('keys', ht.values())

let t = [
    null,
    [["yellow","#FFFF00"]],
    null,null,null,null,
    [["olive","#808000"]],
    [["salmon","#FA8072"]],
    [
        ["lightcoral","#F08080"],
        ["mediumvioletred","#C71585"]
    ],
    [["plum","#DDA0DD"]],
    [["maroon","#800000"]]
]



/** Class representing a Hash Table */
class HashTable {
    constructor() {
      this._storage = [];
      this._size = 10;
    }
    /*
    * Inserts a new key-value pair - O(1)
    * @param {string} key - the key associated with the value
    * @param {*} value - the value to insert
    */
    insert(key, value) {
        if (key && value) {
            const hashedIndex = this._hash(key, this._size);
            console.log(this._storage);
            // storing object in hastable so no two objects can have same key as then hash function will return 
            // same value for both the keys and can't be decided which value to store for that key
            if (this._storage[hashedIndex] && this._storage[hashedIndex]['key'] === key) throw Error('Keys can\'t be same');
            if (this._storage[hashedIndex] !== undefined) {
                if(!Array.isArray(this._storage[hashedIndex])) {
                    // console.log('is not array',this._storage[hashedIndex]);
                    const current = this._storage[hashedIndex];
                    this._storage[hashedIndex] = [];
                    this._storage[hashedIndex].push(current);
    
                } 
                this._storage[hashedIndex].push({key: key,value: value});
                
            } else {
                // console.log('is empty',this._storage[hashedIndex])
                this._storage[hashedIndex] = {key: key, value: value};
            }
        } else {
            throw Error('key and value not defined');
        }
    }
    /*
    * Deletes a key-value pair - O(1) if no collision but if collision then O(n)
    * @param {string} key - the key associated with the value
    * @return {*} value - the deleted value
    */
    remove(key) {
        if (key) {
            const hashedIndex = this._hash(key, this._size);
            let deletedItem;
            if (Array.isArray(this._storage[hashedIndex])) {
                this._storage[hashedIndex] = this._storage[hashedIndex].filter(item => {
                    if (item['key'] === key) deletedItem = item['value'];
                    return item['key'] !== key
                });
                return deletedItem;
            }
            deletedItem = this._storage[hashedIndex]['value']
            this._storage[hashedIndex] = undefined;
            return deletedItem;
        }
    }
    /*
    * Returns the value associated with a key O(1) if no collision but if collision then O(n)
    * @param {string} key - the key to search for
    * @return {*} - the value associated with the key
    */
    retrieve(key) {
        if (key) {
            const hashedIndex = this._hash(key, this._size);
            // console.log(this._storage[hashedIndex]);
            if (Array.isArray(this._storage[hashedIndex])) {
                
                return this._storage[hashedIndex].find(item => item['key'] === key)['value'];
            }
            return this._storage[hashedIndex]['value'];
        }
    }  
    /*
    * Hashes string value into an integer that can be mapped to an array index
    * @param {string} str - the string to be hashed
    * @param {number} n - the size of the storage array
    * @return {number} - an integer between 0 and n
    */
    _hash(str, n) {
      let sum = 0;
      for (let i = 0; i < str.length; i++)
          sum += str.charCodeAt(i) * 3
  
      return sum % n;
    }
}


  const myHash = new HashTable();

  myHash.insert('one', 1);
  myHash.insert('two', 2);
  myHash.insert('three', 3);
  myHash.insert('four', 4);
  myHash.insert('five', 5);
  myHash.insert('six', 6);
  console.log(JSON.stringify(myHash));
//   myHash.insert('six', 7);
  console.log(JSON.stringify(myHash));
  console.log(myHash.retrieve('three'));
  console.log(myHash.retrieve('one'));
  console.log(myHash.remove('three'));
  console.log(myHash.remove('six'));
  console.log(JSON.stringify(myHash));
/** Class representing a Hash Table */
class HashTable {
    constructor(size) {
        this._storage = [];
        this._size = size;
      }
      /*
      * Inserts a new key-value pair
      * @param {string} key - the key associated with the value
      * @param {*} value - the value to insert
      */
      insert(key, value) {
          if (key && value) {
              const hashedIndex = this._hash(key, this._size);
              // console.log(hashedIndex + ' ' + key);
              if (this._storage[hashedIndex] && this._storage[hashedIndex]['key'] === key) throw Error('key cannot be duplicate')
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
      * Deletes a key-value pair
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
      * Returns the value associated with a key
      * @param {string} key - the key to search for
      * @return {*} - the value associated with the key
      */
      retrieve(key) {
          if (key) {
              const hashedIndex = this._hash(key, this._size);
              if (Array.isArray(this._storage[hashedIndex])) {
                  
                  return this._storage[hashedIndex].find(item => item['key'] === key)['value'];
              }
              return this._storage[hashedIndex] ? this._storage[hashedIndex]['value'] : false;
          }
      }  

      getLength() {
          return this._storage.length;
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
  

class ListNode {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

// linear time operation O(n) can be done in another way using 2 while loop but time complexity will be more O(n2)
function removeDup(head) {
    const hashTable = new HashTable(25);
    let current = head;
    while(current) {
        if (hashTable.getLength() && hashTable.retrieve(current.value.toString())) {
            deleteNode(current);
        } else {
            hashTable.insert(current.value.toString(), current.value)
        }
        current = current.next;
    }
    return head;
}

function deleteNode(node) {
    node.value = node.next.value;
    node.next = node.next.next;
    console.log('node',JSON.stringify(node));
    return true;
}

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(2);
const a6 = new ListNode(6);
const a7 = new ListNode(3);
const a8 = new ListNode(8);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;
a6.next = a7;
a7.next = a8;

console.log(JSON.stringify(a1));
console.log(JSON.stringify(removeDup(a1)));
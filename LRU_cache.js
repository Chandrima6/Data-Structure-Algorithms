/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this._hash = new Map();
    this._count = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.get(key)) {
        this._count++;
        this._hash.set(key, this._count);
        return this.cache.get(key);
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.size===this.capacity && !this.cache.get(key)) {
        const keyToDelete = _checkUsage(this._hash); // return the key to delete from cache based on usage
        this.cache.delete(keyToDelete);
        this._hash.delete(keyToDelete);
    }
    this._count++;
    this.cache.set(key, value);
    this._hash.set(key, this._count);
};

function _checkUsage(hash) {
    const sortedHash = new Map([...hash.entries()].sort((a,b)=>a[1]-b[1]));
    return sortedHash.entries().next().value[0];
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
**/


const cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache);
console.log('retrieve 1 for ', cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache);
console.log('retrieve 2 for ', cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
console.log(cache);
console.log('retrieve 1 for ', cache.get(1));       // returns -1 (not found)
console.log('retrieve 3 for ', cache.get(3));       // returns 3
console.log('retrieve 4 for ', cache.get(4));       // returns 4
console.log(cache);

// console.log('retrive 2 for ' ,cache.get(2));
// cache.put(2,6);
// console.log(cache);
// console.log('retrive 1 for ' ,cache.get(1));
// cache.put(1,5);
// console.log(cache);
// cache.put(1,2);
// console.log(cache);
// console.log('retrive 1 for ' ,cache.get(1));
// console.log('retrive 2 for ' ,cache.get(2));
// console.log(cache);
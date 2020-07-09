/** Class representing a Queue. 
 * @constructor
*/

class Queue {

    constructor() {
      this._storage = {};
      this._pointer = 0;
    }
    /*
    * Enqueues a new value at the end of the queue - O(1)
    * @param {*} value the value to enqueue
    */
    enqueue(value) {
        if (value) {
            this._storage[this._pointer] = value;
            this._pointer++;
        } else {
            throw Error('value is undefined');
        }
    }
  
    /*
    * Dequeues the value from the beginning of the queue and returns it - O(n)
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
        const element = this._storage[0];
        delete this._storage[0];
        console.log(this._storage);
        for (const key in this._storage) {
            if (this._storage.hasOwnProperty(key)) {
                this._storage[key-1] = this._storage[key];
            }
        }
        console.log(this._pointer);
        console.log(this._storage);
        if (this._pointer !== 0) {
            this._pointer--;
            delete this._storage[this._pointer];
        }
        return element;
    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue - O(1)
    * @return {*} the first and oldest value in the queue
    */
    peek() {
        return this._storage[0];
    }
  }

  const myQueue = new Queue();

  console.log(myQueue);
  console.log('dequeue', myQueue.dequeue());
  myQueue.enqueue(9);
  myQueue.enqueue(2);
  myQueue.enqueue(1);
  myQueue.enqueue(7);
  console.log(myQueue);
  console.log('dequeue', myQueue.dequeue());
  console.log(myQueue);
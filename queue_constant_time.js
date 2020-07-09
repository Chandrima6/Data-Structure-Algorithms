/** Class representing a Queue. 
 * @constructor
*/

class Queue {

    constructor() {
      this._storage = {};
      this._head = 0;
      this._tail = 0;
    }
    /*
    * Enqueues a new value at the end of the queue- O(1)
    * @param {*} value the value to enqueue
    */
    enqueue(value) {
        if(value) {
            this._storage[this._tail] = value;
            this._tail++;
        } else {
            throw Error('value is not defined');
        }
    }
  
    /*
    * Dequeues the value from the beginning of the queue and returns it- O(1)
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
        if (this._tail !== this._head) {
            const elem = this._storage[this._head]
            delete this._storage[this._head];
            this._head++;
            return elem;
        }
    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue - O(1)
    * @return {*} the first and oldest value in the queue
    */
    peek() {
        return this._storage[this._head];
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
  console.log('dequeue', myQueue.dequeue());
  console.log('dequeue', myQueue.dequeue());
  console.log('dequeue', myQueue.dequeue());
  console.log('dequeue', myQueue.dequeue());
  console.log(myQueue);
  myQueue.enqueue(13);
  console.log('dequeue', myQueue.dequeue());
  myQueue.enqueue(72);
  console.log(myQueue);
/** Class representing a Stack. */

class Stack {
    constructor() {
      this._storage = {};
      this._pointer = -1;
    }
    /*
    * Adds a new value at the end of the stack - O(1)
    * @param {*} value the value to push
    */
    push(value) {
        if (value) {
            this._pointer ++;
            this._storage[this._pointer] = value;
        } else {
            throw Error('value is undefined');
        }
    }
  
    /*
    * Removes the value at the end of the stack and returns it- O(1)
    * @return {*} the last and newest value in the stack
    */
    pop() {
        if (this._pointer < 0) {
            return null;
        }
        const elem = this._storage[this._pointer];
        delete this._storage[this._pointer];
        this._pointer --;
        return elem;
    }
    /*
    * Returns the value at the end of the stack without removing it- O(1)
    * @return {*} the last and newest value in the stack
    */
    peek() {
        return this._storage[this._pointer];
    }
  }
  
  const myStack = new Stack();
  console.log(myStack)
  console.log(myStack.pop());
  console.log(myStack);
  myStack.push(9);
  myStack.push(10);
  myStack.push("chan");
  myStack.push("deep");
  console.log(myStack);
  console.log('POP', myStack.pop());
  console.log(myStack);
  myStack.push("98");
  console.log(myStack);
  console.log('POP', myStack.peek());
  myStack.push(1);
  console.log(myStack);

  
  
class SetOfStacks {
    constructor() {
        this.results = [[]];
        this._pointer = 0;
        this._threshold = 3
        this._childPointer = 0;
    }

    /**
     * push an element into the stack available from the set of stacks
     * if a stack reaches threshold creates a new stack
     * @param {} value 
     */
    push(value) {
        if(!value) return null;
        if(this.results[this._pointer].length === this._threshold) {
            this.results.push([]);
            this._pointer++;
            this._childPointer = 0;
        }
        this.results[this._pointer][this._childPointer] = value;
        this._childPointer++;
    }

    pop() {
        this.results[this._pointer] = this.results[this._pointer].slice(0, 
            this.results[this._pointer].length - 1);
        this._childPointer--;
        if(this.results[this._pointer].length === 0) {
            this.results = this.results.slice(0, this.results.length -1);
            this._pointer--;
            this._childPointer = 0;
        }
    }

    peek() {
        return this.results;
    }
}

const setOfStacks = new SetOfStacks();
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(9);
setOfStacks.push(8);
setOfStacks.push(1);
setOfStacks.push(5);
setOfStacks.push(2);
setOfStacks.push(0);
setOfStacks.push(5);

console.log(setOfStacks.results);
setOfStacks.pop();
console.log(setOfStacks.results);
setOfStacks.pop();
console.log(setOfStacks.results);
setOfStacks.push(5);
setOfStacks.push(0);
setOfStacks.push(-8);
setOfStacks.push(111);
console.log(setOfStacks.results);
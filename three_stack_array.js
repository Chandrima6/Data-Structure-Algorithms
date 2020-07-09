class MultiStack {
    constructor(stackNum) {
        this._stackNum = stackNum;
        this.results = [];
        this._pointer = [];
        for(let i=0; i<this._stackNum; i++) {
            this.results.push([]);
            this._pointer.push(0);
        }
        
    }

    push(stackNum, value) {
        console.log('Results',this.results);
        console.log('Pointer',this._pointer);
        stackNum = stackNum - 1;
        if(stackNum>=this._stackNum || stackNum < 0) return null;
        this.results[stackNum][this._pointer[stackNum]] = value;
        this._pointer[stackNum]++;
    }

    pop(stackNum) {
        stackNum = stackNum - 1;
        if(stackNum>=this._stackNum || stackNum < 0) return null;
        this.results[stackNum] = this.results[stackNum].slice(0, this.results[stackNum].length - 1);
    }

    peek(stackNum) {
        stackNum = stackNum - 1;
        if(stackNum>=this._stackNum || stackNum < 0) return null;
        return this.results[stackNum]
    }
}

const multiStack = new MultiStack(3)

console.log(multiStack.results);

multiStack.push(1, 3);
multiStack.push(1, 4);
multiStack.push(1, 8);
multiStack.push(1, 9);
multiStack.push(2, 4);
multiStack.push(2, 12);
multiStack.push(2, 0);
multiStack.push(2, 2);
multiStack.push(2, 9);
multiStack.push(2, 6);
multiStack.push(3, 8);
multiStack.push(3, 11);
multiStack.push(3, -9);
multiStack.push(3, 1);
multiStack.push(3, 3);
multiStack.push(3, -12);

console.log(multiStack.results);

multiStack.pop(2);
console.log(multiStack.results);
console.log(multiStack.peek(1));


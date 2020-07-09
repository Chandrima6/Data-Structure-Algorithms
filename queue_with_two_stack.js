class QueueWithStack {
    constructor() {
        this.results = [];
        this._pointer = 0;
    }

    enqueue(value) {
        this.results[this._pointer] = value;
        this._pointer++;
    }

    
    dequeue() {
        let tempStack = [];
        while(this.results.length !== 0 ){
            const elem = this.results[this.results.length-1];
            this.results = this.results.slice(0, this.results.length - 1);
            tempStack.push(elem);
        }
        tempStack = tempStack.slice(0, tempStack.length-1);
        while(tempStack.length !== 0 ){
            const elem = tempStack[tempStack.length-1];
            tempStack = tempStack.slice(0, tempStack.length - 1);
            this.results.push(elem);
        }
        if(this._pointer !== 0) this._pointer--;
    }
}

const queueWithStack = new QueueWithStack();
queueWithStack.enqueue(9);
queueWithStack.enqueue(8);
queueWithStack.enqueue(-2);
queueWithStack.enqueue(1);
queueWithStack.enqueue(6);
queueWithStack.enqueue(11);

console.log(queueWithStack.results);

queueWithStack.dequeue();
console.log(queueWithStack.results);
queueWithStack.dequeue();
console.log(queueWithStack.results);
queueWithStack.enqueue(11);
console.log(queueWithStack.results);
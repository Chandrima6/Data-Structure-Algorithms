// Add your javascript here

class Stack {
    constructor() {
        this.list = [];
        this._pointer = 0;
    }
    
    push(value) {
        this.list[this._pointer] = value;
        this._pointer++;
    }
    
    pop() {
        if (this.list.empty) {
            alert('Operation not permitted');
            return;
        }
        this._pointer --;
        this.list.pop()
        
    }
    
    empty() {
        if (this.list.length === 0) alert ('Yes, Stack is empty')
        else alert('No, Stack is not empty')
    }
    
    peek() {
        if (this.list.empty) {
            alert('Operation not permitted');
            return;
        }
        alert(this.list[this._pointer - 1]);
        return this.list[this._pointer - 1];
    }
    
    swap() {
        // add condition to check if the stack has 2 items
        if (this.list.length < 2) {
            alert('Operation not permitted');
            return;
        }
        const temp = this.list[this._pointer - 2];
        this.list[this._pointer - 2] = this.list[this._pointer - 1];
        this.list[this._pointer - 1] = temp;
    }
}

const stackOp = new Stack();
// stackOp.push(3);
// stackOp.push(4);
// stackOp.push(7);
// console.log(stackOp);
// stackOp.pop();
// // console.log(stackOp);
// stackOp.push(6);
// console.log(stackOp.empty())
// console.log(stackOp.peek())
// stackOp.swap();

// console.log(stackOp);
// stackOp.pop()
// stackOp.pop();
// stackOp.swap();

// console.log(stackOp);
// stackOp.pop();
// stackOp.pop();
const result = document.getElementById('result');
document.getElementById('push').addEventListener('click', () => {
    const stackInput = document.getElementById('stack-input').value;
    stackOp.push(stackInput);
    const elem = '<li class="stack-elem"> '+ stackInput +' </li>'
    
    document.getElementById('result-list').append(elem);
    // result.innerText = stackOp.list;
});

document.getElementById('pop').addEventListener('click', () => {
    stackOp.pop();
    result.innerText = stackOp.list;
});

document.getElementById('empty').addEventListener('click', () => {
    stackOp.empty();
    result.innerText = stackOp.list;
});

document.getElementById('peek').addEventListener('click', () => {
    stackOp.peek();
    result.innerText = stackOp.list;
});

document.getElementById('swap').addEventListener('click', () => {
    stackOp.swap();
    result.innerText = stackOp.list;
});



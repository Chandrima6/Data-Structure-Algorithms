class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor(){
        this._head = null;
        this._pointer = this._head
    }

    push(value) {
        const node = new ListNode(value);
        if (this._head === null) {
            this._head = node;
            this._pointer = this._head;
        }  else {
            node.next = this._pointer;
            this._pointer = node;
            this._head = this._pointer;
        }
    }

    pop() {
        if (this._head) {
            const temp = this._pointer;
            if (this._head.next) {
                this._pointer.value = this._pointer.next.value;
                this._pointer.next = this._pointer.next.next;
                delete this._head;
                this._head = this._pointer;
            } else {
                delete this._pointer;
                this._head = this._pointer;
            }
        } else {
            console.log('Stack empty');
        }
        
    }

    peek() {
        return this._head;
    }
}

const myStack = new StackLinkedList();

myStack.pop();
myStack.push(1);
myStack.pop();
myStack.push(2);
console.log(JSON.stringify(myStack.peek()));
myStack.push(3);
myStack.pop();
myStack.push(4);
myStack.push(5);
myStack.push(6);

console.log(JSON.stringify(myStack.peek()));
// factorial with memoization
function factorialMemoize() {
    const cache = new Map()
    return ((n) => {
        if (n === 1) {
            cache.set(n, 1)
            return 1;
        } else {
            if (cache.get(n)) {
                return cache.get(n)
            } else {
                const fact = n * factorial(n-1)
                cache.set(n, fact)
                return fact
            }
        }
    })
}

const factorial = factorialMemoize()

console.log(factorial(1));

// binary tree class
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertItem(value) {
        const tree = new BinaryTree(value);
        const queue = [this];
        while(queue.length > 0) {
            const item = queue.shift();
            if (item.left === null) {
                item.left = tree;
                return true;
            }
            else if (item.right === null) {
                item.right = tree;
                return true;
            }
            else {
                queue.push(item.left);
                queue.push(item.right);
            }
        }
    }

    // left => root => right
    preOrderTraversal() {
        const helper = (tree) => {
            if (tree.left) helper(tree.left)
            console.log(tree.value)
            if (tree.right) helper(tree.right)
        }
        helper(this)
    }

    // root => left => right
    inOrderTraversal() {
        const helper = (tree) => {
            console.log(tree.value)
            if (tree.left) helper(tree.left)
            if (tree.right) helper(tree.right)
        }
        helper(this)
    }

    // left => right => root
    postOrderTraversal() {
        const helper = (tree) => {
            if(tree.left) helper(tree.left)
            if(tree.right) helper(tree.right)
            console.log(tree.value)
        }
        helper(this)
    }
}

const myTree = new BinaryTree(3);
myTree.insertItem(5);
myTree.insertItem(7);
myTree.insertItem(9);
myTree.insertItem(10);
myTree.insertItem(12);

console.log(myTree)
// pre
myTree.preOrderTraversal()
// in
myTree.inOrderTraversal()
// post
myTree.postOrderTraversal()


// binary search tree class
class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertItem(value) {
        const tree = new BinarySearchTree(value);
        const helper = (currTree) => {
            if (tree.value < currTree.value) {
                if (currTree.left === null) {
                    currTree.left = tree
                    return true;
                } else {
                    helper(currTree.left)
                }
            }
            else if (tree.value > currTree.value) {
                if (currTree.right === null) {
                    currTree.right = tree
                    return true;
                } else {
                    helper(currTree.right)
                }
            } else throw Error('invalid value')
        }
        helper(this)
    }

    constains(value) {
        const helper = (tree) => {
            if(tree.value === value) return true;
            else if (tree.value < value && tree.right) return helper(tree.right)
            else if (tree.value > value && tree.left) return helper(tree.left)
            else throw Error('value not found')
        }
        return helper(this)
    }
}

const myBinarySearchTree = new BinarySearchTree(2);
myBinarySearchTree.insertItem(5)
myBinarySearchTree.insertItem(3)
myBinarySearchTree.insertItem(6)
myBinarySearchTree.insertItem(1)

console.log(myBinarySearchTree)
console.log(myBinarySearchTree.constains(6))

// graph
class Node {
    constructor(value) {
        this.value = value;
        this.edges = []
    }
}
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addNode(value) {
        const node = new Node(value)
        this.adjList.set(value, node);
    }

    addEdge(start, end) {
        if (!this.adjList.get(start)) this.addNode(start)
        if (!this.adjList.get(end)) this.addNode(end)
        this.adjList.get(start).edges.push(this.adjList.get(end));
        this.adjList.get(end).edges.push(this.adjList.get(start));
    }

    removeNode(value) {
        const deletedItem = this.adjList.get(value);
        if (deletedItem && deletedItem.edges.length > 0) {
            deletedItem.edges.forEach(node => {
                if (node && this.adjList.get(node.value)) {
                    this.adjList.get(node.value).edges = this.adjList.get(node.value).edges.filter(edgeNode => {
                        return edgeNode.value !== value
                    })
                }
            });
            this.adjList.delete(value);
            
        } else throw Error('Node {value} does not exists')
    }

    removeEdge(start, end) {
        this.adjList.get(start).edges = this.adjList.get(start).edges.filter(node => node.value !== end);
        this.adjList.get(end).edges = this.adjList.get(end).edges.filter(node => node.value !== start);
    }

    // auxillary data structure queue needed
    breadthFirstTraversal(start) {
        const traverseQueue = [start];
        const outputArr = [];
        while(traverseQueue.length > 0) {
            const item = traverseQueue.shift();
            outputArr.push(item)
            this.adjList.get(item).edges.forEach(node => {
                if (!(outputArr.includes(node.value))) {
                    traverseQueue.push(node.value)
                }
            });
        }
        return outputArr
    }

    // recursion in wrapper pattern
    depthFirstTraversal(start) {
        const outputArr = [];
        const helper = (start) => {
            outputArr.push(start);
            this.adjList.get(start).edges.forEach(node => {
                if (!outputArr.includes(node.value)) helper(node.value);
            });
        }
        helper(start)
        return outputArr;
    }
}

const myGraph = new Graph()

myGraph.addNode(3)
myGraph.addNode(4)
myGraph.addNode(7)
myGraph.addNode(9)
myGraph.addNode(12)

myGraph.addEdge(4, 7)
myGraph.addEdge(12,3)

console.log(myGraph.adjList)

myGraph.removeNode(3)
console.log(myGraph)
myGraph.removeEdge(4,7)
console.log(myGraph)
myGraph.addNode(3)
myGraph.addNode(11)
myGraph.addNode(5)
myGraph.addEdge(3, 4)
myGraph.addEdge(3, 7)
myGraph.addEdge(4, 9)
myGraph.addEdge(12, 7)
myGraph.addEdge(9, 11)
myGraph.addEdge(4, 5)
console.log(myGraph.breadthFirstTraversal(3));
console.log(myGraph.depthFirstTraversal(3));

// Linked list
class SingleLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SingleLinkedList {
    constructor() {
        this.head = this.next = null;
    }

    insertAtTail(value) {
        const node = new SingleLinkedListNode(value);
        if (this.head === null) {
            this.head = this.next = node;
        } else {
            this.next.next = node;
        }
        console.log(this.next);
        this.next = node;
    }

    removeFromTail() {
        this.next = this.head;
        while (this.next.next.next !== null ) {
            this.next = this.next.next;
        }         
        this.next.next = null;
    }

}

const myLinkedList = new SingleLinkedList();

myLinkedList.insertAtTail(2);
myLinkedList.insertAtTail(3);
myLinkedList.insertAtTail(4);
myLinkedList.insertAtTail(5);
myLinkedList.insertAtTail(9);


console.log(JSON.stringify(myLinkedList));
myLinkedList.removeFromTail();
console.log(JSON.stringify(myLinkedList));
myLinkedList.insertAtTail(8);
console.log(JSON.stringify(myLinkedList));

// double linked list
class DoubleLinkedListNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DoubleLinkedList {
    constructor() {
        this.head = this.tail = null; 
    }

    insertAtTail(value) {
        const node = new DoubleLinkedListNode(value);
        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail.next.prev = this.tail;
        }
        this.tail = node;
    }

    removeFromTail() {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

const myDoubleLinkedList = new DoubleLinkedList();
myDoubleLinkedList.insertAtTail(1);
myDoubleLinkedList.insertAtTail(4);
myDoubleLinkedList.insertAtTail(5);
myDoubleLinkedList.insertAtTail(9);
console.log(myDoubleLinkedList);
myDoubleLinkedList.removeFromTail();
console.log(myDoubleLinkedList.head.next);

//binary search using recursion wrapper pattern

function binarySearch(arr, item) {
    sortedArr = arr.sort();
    const helper = (array) => {
        const midPos = Math.ceil(array.length /2)
        const midItem = array[midPos];
        if (midItem < item) {
            array = array.slice(midPos)
            return helper(array)
        } else if (midItem > item) {
            array = array.slice(0, midPos);
            return helper(array)
        } else if (midItem === item) {
            return item;
        } else {
            return false;
        }
    }
    return helper(sortedArr)
}

const available = binarySearch([1,4,5,99,2,3,0,9,7,8], 3)
console.log(available);


// hash table

class HashTable {
    constructor() {
        this.storage = {};
        this._size = 1000; // making this size big will avoid collision
    }

    addItem(key, value) {
        const hashedKey = this._hash(key);
        const obj = {};
        obj[key] = value;
        if (this.storage[hashedKey]) {
            this.storage[hashedKey].push(obj);
        } else {
            this.storage[hashedKey] = [obj];
        }
    }

    getItem(key) {
        const hashedKey = this._hash(key);
        if(this.storage[hashedKey].length === 1) return this.storage[hashedKey][0];
        else {
            for (let i=0; i<this.storage[hashedKey].length; i++) {
                if(this.storage[hashedKey][i][key]) return this.storage[hashedKey][i];
            }
        }
        return false;
    }


    _hash(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3
        return sum % this._size;
    }
}

const myHashTable = new HashTable();
myHashTable.addItem('chan', 30);
myHashTable.addItem('deep', 35);
myHashTable.addItem('bob', 20);
myHashTable.addItem('ben', 10);
myHashTable.addItem('alpha', 80);
myHashTable.addItem('chak', 80);
myHashTable.addItem('chandrima', 80);

console.log(myHashTable.storage);
console.log(myHashTable.getItem('chandrima'))
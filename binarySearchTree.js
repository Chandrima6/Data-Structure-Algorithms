class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert(value) {
    //     if(value){
    //         const node = new Node(value);
    //         if(this.root !== null) {
    //             console.log(this.root);
    //             let currentNode = this.root;
    //             console.log('current node', currentNode);
    //             while(currentNode !== null) {
    //                 console.log('current node', currentNode);
    //                 if(value < currentNode['value']) {
    //                     if(currentNode.left === null) {
    //                         currentNode.left = node;
    //                         currentNode = node;
    //                         return currentNode
    //                     }
    //                     currentNode = currentNode.left;
    //                 } else if(value > currentNode['value']) {
    //                     if(currentNode.right === null) {
    //                         currentNode.right = node;
    //                         currentNode = node;
    //                         return currentNode
    //                     }
    //                     currentNode = currentNode.right;
    //                 }
    //             }
                    
    //         } else {
    //             this.root = new Node(value);
    //         }
    //     }

    // }

    insert(value){
        const insertHelper = (node, newNode) => {
            console.log(node);
            if(newNode.value < node.value) {
                if(node.left === null) {
                    node.left = newNode;
                    return;
                }
                insertHelper(node.left, newNode);
            } else if (newNode.value > node.value) {
                if (node.right === null) {
                    node.right = newNode;
                    return;
                }
                insertHelper(node.right, newNode);
            } else {
                return;
            }
        }
        if(this.root === null) {
            this.root = new Node(value);
        } else {
            const node = new Node(value);
            insertHelper(this.root, node);
        }
    }

    

    contains(value) {
        let currentNode = this.root;
        while(currentNode !== null) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) return true;
            
        }
        
        return false;
    }

    min(node = null) {

    }

    max(node) {
    }

    remove(value) {
    }

    // left, root, right
    inOrderTraversal(node, func = console.log) {
        
    }

    // root, left, right
    preOrderTraversal(node, func = console.log) {
    }

    // left, right, root
    postOrderTraversal(node, func = console.log) {
    }
}

const myBinarySearchTree = new BinarySearchTree();
// const node7 = new Node(7);
// const node1 = new Node(1);
// const node9 = new Node(9);
// const node11 = new Node(11);
// const node6 = new Node(6);
// const node5 = new Node(5);
// const node12 = new Node(12);
// const node2 = new Node(2);
// const node3 = new Node(3);
// myBinarySearchTree.insert(node7);
// myBinarySearchTree.insert(node1);
// myBinarySearchTree.insert(node9);
// myBinarySearchTree.insert(node11);
// myBinarySearchTree.insert(node6);
// myBinarySearchTree.insert(node5);
// myBinarySearchTree.insert(node12);
// myBinarySearchTree.insert(node3);
// myBinarySearchTree.insert(node2);

myBinarySearchTree.insert(7);
myBinarySearchTree.insert(1);
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(11);
myBinarySearchTree.insert(6);
myBinarySearchTree.insert(12);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(2);
myBinarySearchTree.insert(5);

console.log(JSON.stringify(myBinarySearchTree));
console.log(myBinarySearchTree.contains(7));

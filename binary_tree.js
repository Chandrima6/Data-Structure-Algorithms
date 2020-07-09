class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    // insert a child where you only have reference to the tree root node and the tree object 
    // - time complexity linear as number of nodes and number of actions in traverse are equal
    /*steps:
    -- put root node in a queue.
    -- extract root node from queue
    -- loop while queue is not empty and value is not inserted in tree
    -- check if left child - no - value inserted
    -- yes - check if right child - no - value inserted
    -- yes - push to queue the left and right child
    -- run the loop again */
    insertChild(value) { 
        const newTree = new BinaryTree(value);
        const queue = [this];
        // console.log('queue', queue);
        let valueInserted = false;
        if (value) {
            while (queue.length && !valueInserted) {
                const currentTree = queue.shift();
                if(!currentTree.left) {
                    currentTree.left = newTree;
                    valueInserted = true;
                    return valueInserted
                } else if (!currentTree.right) {
                    currentTree.right = newTree;
                    valueInserted = true;
                    return valueInserted
                } else {
                    queue.push(currentTree.left);
                    queue.push(currentTree.right);
                }
            }
        } 
        return false;
    }
    //put all matching element values in array
    // contains(value) {
    //     const array = []
    //     function push(val) {
    //         if(val === value) array.push(val);
    //     }
    //     this.inOrderTraversal(push);
    //     return array;
    // }

    //return after one match
    contains(value) {
        if(this.value === value) return true;
        return (this.left && this.left.contains(value))  || (this.right && this.right.contains(value)); 
    }

    // left, root, right - time complexity linear as number of nodes and number of actions in traverse are equal
    inOrderTraversal(func = console.log) { 
        if(this.left) this.left.inOrderTraversal(func); // LEFT
        func(this.value); // ROOT
        if(this.right) this.right.inOrderTraversal(func); // RIGHT
        
    }
  
    // root, left, right - time complexity linear as number of nodes and number of actions in traverse are equal
    preOrderTraversal(func = console.log) {
        func(this.value); // ROOT
        if (this.left) this.left.preOrderTraversal(func); // LEFT
        if (this.right) this.right.preOrderTraversal(func); // RIGHT
    }
  
    // left, right, root - time complexity linear as number of nodes and number of actions in traverse are equal
    postOrderTraversal(func = console.log) {
        if(this.left) this.left.postOrderTraversal(func); // LEFT
        if(this.right) this.right.postOrderTraversal(func); // RIGHT
        func(this.value); // ROOT
    }
}
function print(val) {
    console.log(val);

}

function printLeaf(tree, output = []) {
    if (tree) {
        if(tree.left === null && tree.right === null) {
            output.push(tree.value)
        }
        if(tree.left !== null) printLeaf(tree.left, output);
        if(tree.right !== null) printLeaf(tree.right, output);
        return output;
    }
}





const myTree = new BinaryTree(4);
myTree.insertChild(1);
myTree.insertChild(4);
myTree.insertChild(9);
myTree.insertChild(11);
myTree.insertChild(21);
myTree.insertChild(3);
myTree.insertChild(4);
myTree.insertChild(10);
myTree.insertChild(6);
myTree.insertChild(20);
myTree.insertChild(3);

// myTree.inOrderTraversal(print);
// console.log("============")
// myTree.preOrderTraversal(print);
// console.log("============")
// myTree.postOrderTraversal(print);
// console.log(myTree.contains(1));

console.log(JSON.stringify(myTree));
// console.log(printLeaf(myTree));

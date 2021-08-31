class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor(value) {
        this.head = new Node(value, null);
        this.tail = this.head;
    }
    /*
    * Inserts a new value to the end of the linked list - O(1)
    * @param {*} value - the value to insert
    */
    insert(value) {
        if (value) {
            const node = new Node(value, null);
            if (this.head === null) {
                this.head = node;
            } else {
                this.tail.next = node;
            }
            this.tail = node;
        }
    }
}
function nodesLinkedList(tree) {
    let level=0;
    const linkedListArr = {};
    // create linkedlist per level
    // store value in the linked list in a level 
    function store(tree, level) {
        if(linkedListArr[level]) {
            linkedListArr[level].insert(tree.value);
        } else {
            const linkedList = new LinkedList(tree.value);
            linkedListArr[level] = linkedList;
        }
        
        // console.log(linkedListArr);
    }
    // preorder traversal of tree => root, left, right
    function preOrderTraversal(tree, level) {
        store(tree, level);
        if(tree.left) preOrderTraversal(tree.left, level+1);
        if(tree.right) preOrderTraversal(tree.right, level+1);
    }
    preOrderTraversal(tree, level);
    return JSON.stringify(linkedListArr);
}


const binaryTree = {
    "value":4,
    "left":{
       "value":1,
       "left":{
          "value":9,
          "left":{
             "value":2,
             "left":null,
             "right":null
          },
          "right":{
             "value":10,
             "left":null,
             "right":null
          }
       },
       "right":{
          "value":11,
          "left":{
             "value":6,
             "left":null,
             "right":null
          },
          "right":{
             "value":20,
             "left":null,
             "right":null
          }
       }
    },
    "right":{
       "value":30,
       "left":{
          "value":21,
          "left": null,
          "right":null
       },
       "right":{
          "value":3,
          "left":null,
          "right":null
       }
    }
 }

console.log(nodesLinkedList(binaryTree));
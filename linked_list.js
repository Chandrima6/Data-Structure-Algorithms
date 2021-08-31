/** Class representing a Linked List */

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
    /*
    * Deletes a node - O(1) if we know the location of the node but O(n) if we have to search the node
    * @param {*} node - the node to remove
    * @return {*} value - the deleted node's value
    */
    remove(node) {
        
    }
    /*
    * Removes the value at the end of the linked list - O(n)
    * @return {*} - the removed value
    */
   // if this.tail points to end node then we have reference to the last node
   // if we have a reference to the deleted node then we dont have to traverse 
   // so it will be a constant time operation
    removeTail() {
        const elem = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            return elem;
        }
        let currentNode = this.head;
        while(currentNode.next !== elem) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        return elem;    
    }
    
    /*
    * Searches the linked list and returns true if it contains the value passed - O(n)
    * @param {*} value - the value to search for
    * @return {boolean} - true if value is found, otherwise false
    */
    contains(value) {
        if (this.tail.value === value) return this.tail 
        if (this.head.value === value) return this.head;
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return false;
    }  
    /*
    * Checks if a node is the head of the linked list - O(1)
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the head, otherwise false
    */
    isHead(node) {
      return this.head === node;
    }
    /*
    * Checks if a node is the tail of the linked list - O(1)
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the tail, otherwise false
    */
    isTail(node) {
      return this.tail === node;
    }
  }

  
  const myList = new LinkedList(1); 
  console.log('list',JSON.stringify(myList));
  console.log(myList.removeTail());
  console.log('list',myList);
  myList.insert(6);
  console.log('list',JSON.stringify(myList));
  console.log(myList.removeTail());
  console.log('list',JSON.stringify(myList));
  myList.insert(13);
  myList.insert(16);
  console.log('head',JSON.stringify(myList.head));
  console.log('tail',JSON.stringify(myList.tail));
  console.log('list',JSON.stringify(myList));
  console.log('contains',JSON.stringify(myList.contains(1)));
  console.log(myList.removeTail());
  console.log('list',JSON.stringify(myList));
  myList.remove(13)
  

  
  
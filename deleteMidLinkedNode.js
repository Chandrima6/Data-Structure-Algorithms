// Delete a node from the middle of a linked list
class ListNode {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
/*
* Deletes a node from the middle of the linked list - linear time as we dont know the middle node - O(n)
* @param {Node} head - the head node of a linkedlist
* @return {Node} - the deleted node
*/
function deleteMiddleNode(head) {
    let currentNode = head;
    let length= 1;
    while(currentNode.next) {
        currentNode = currentNode.next;
        length++;
    }
    const midPosition = Math.ceil(length / 2);
    let tail = head;
    while((length - midPosition) > 1) {
        tail = tail.next;
        length--;
    }
    console.log('tail next',JSON.stringify(tail.next));
    console.log('tail',JSON.stringify(tail));
    // tail.next = tail.next.next;
    deleteNode(tail.next);
    console.log('tail',JSON.stringify(tail));
    console.log('head',JSON.stringify(head));
    return head;
}

// constant time - O(1)
function deleteNode(node) {
    node.value = node.next.value;
    node.next = node.next.next;
    console.log('node',JSON.stringify(node));
    return true;
}
  
const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);
const a6 = new ListNode(6);
const a7 = new ListNode(7);
const a8 = new ListNode(8);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;
a6.next = a7;
a7.next = a8;

console.log(JSON.stringify(a1));
console.log(JSON.stringify(deleteMiddleNode(a1)));
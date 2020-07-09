
// implement properly
// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//     }
//     push(element){
//         console.log(this.head);
//         let node = new Node(element);
//         let current = this.head;
//         if (current === null) {
//             this.head = node;
//             node.next = this.head;
//         } else {
//             while(current.next != null){
//                 current = current.next;
//             }
//             current.next = node;
//             node.next = this.head;
//             console.log(this.head);
//         }
//     }
// }

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }

// }

// const circularLinkedList = new CircularLinkedList();

// circularLinkedList.push("a")
// console.log(circularLinkedList.head.next);
// circularLinkedList.push("b")
// circularLinkedList.push("c")
// circularLinkedList.push("d")

// console.log(circularLinkedList.head.next);

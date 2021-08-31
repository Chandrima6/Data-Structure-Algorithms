/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    console.log('head', head);
    const copy = {};
    let visited = {};
    const helper = (head, copyChild) => {
        for(let item in head) {
            // console.log('copy child', copyChild);
            // console.log('visited', visited);
            if(item === 'val') {
                copyChild[item] = head[item];
                visited[head[item]] = copyChild;
            }
            else if(item === 'random') {
                // console.log('random', item);
                // console.log('visited', visited);
                if(head[item] !==null) {
                    if(visited[head[item]['val']]) copyChild[item] = visited[head[item]['val']];
                } else copyChild[item] = null;
                
            }
            else if(item === 'next') {
                if(item !== null) {
                    copyChild[item] = {};
                    helper(head[item], copyChild[item]);
                } else copyChild[item] = null;
            }
        }
    }
    helper(head , copy)
    console.log('equality check', copy===head);
    return copy;
}


const node1 = {
    val: 7,
    next: {},
    random: null
}

const node2 = {
    val: 13,
    next: {},
    random: {}
}
const node3 = {
    val: 11,
    next: {},
    random: {}
}
const node4 = {
    val: 10,
    next: {},
    random: {}
}
const node5 = {
    val: 1,
    next: null,
    random: {}
}

// next pointers
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// random pointers
node2.random = node1;
node3.random = node5;
node4.random = node3;
node5.random = node1;

console.log('Deep Copy', copyRandomList(node1));
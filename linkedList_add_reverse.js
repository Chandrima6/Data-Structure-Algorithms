// addReverseLinkedList(l1, l2) 
//     nl = null
//     carry = 0
//     p1 = l1
//     p2 = l2
//     n1 = nl
//     additems () => 
//         if p1 === null && p2 === null return;
//         const p1Val = p1 && p1.value ? p1.value : 0
//         const p2Val = p2 && p2.value ? p2.value : 0
//         const sum = p1Val + carry + p2Val
//         carry = 10th digit of sum
//         const node = {
//             value: 0th digit of sum,
//             next: null
//         }
//         n1 = node;
//         n1 = n1.next;
//         p1 = p1.next;
//         p2 = p2.next;
//         additems()


// complexity time: O(n) 
function addReverseLinkedList(l1, l2) {
    let nl = null
    let carry = 0
    let p1 = l1
    let p2 = l2
    let n1 = nl
    const helper = () => {
        console.log(n1);
        if (p1 === null && p2 === null) return;
        const p1Val = p1 && p1.value ? p1.value : 0
        const p2Val = p2 && p2.value ? p2.value : 0
        const sum = p1Val + carry + p2Val
        carry = Math.floor(sum/10);
        const node = {
            value: sum%10,
            next: null
        }
        if(n1 === null) {
            n1 = node;
            nl = n1; 
        }
        else {
            n1.next = node
            n1 = n1.next
        }
        if (p1 !== null) p1 = p1.next;
        if (p2 !== null) p2 = p2.next;
        helper()
    }
    helper();
    return nl;
}

const l1 = {
    value: 7,
    next: {
        value: 3,
        next: {
            value: 4,
            next: {
                value: 1,
                next: null
            }
        }
    }
}

const l2 = {
    value: 5,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
}

console.log(JSON.stringify(addReverseLinkedList(l1, l2)))





// complexity O(n) // space complexity O(n)

function findKthElem(list, k) {
    if(list && k > 0) {
        console.log(list);
        console.log(k);
        const cache = new Map();
        let count = 1;
        let pointer = list;
        while(pointer['next'] !== null) {
            cache.set(count, pointer);
            pointer = pointer['next'];
            count++;
        }
        cache.set(count, pointer);
        console.log(cache);
        return ((count + 1) - k) > 0 ? cache.get((count + 1) - k) : false;
    }
    return false;
}

// time complexity O(n) space complexity O(1)
function findKthElemOptimal(list, k) {
    if (list && k > 0) {
        let head = list;
        let pointer = head;
        for(let i=1; i<=k; i++) {
            if(pointer.next===null) return false;
            pointer = pointer.next;
        }
        while(pointer !== null) {
            head = head.next;
            pointer = pointer.next;
        }
        return head;
    }
}


const list = {
    value: "a",
    next: {
        value: "b",
        next: {
            value: "c",
            next: {
                value: "d",
                next: null
            }
        }
    }
}
// console.log(JSON.stringify(findKthElem(list, 5)));
console.log(JSON.stringify(findKthElemOptimal(list, 10)));
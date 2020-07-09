
// can't find input to test
function detectHeadCircularLL(list) {
    console.log(list);
}

const list = {
    value: "a",
    next: {
        value: "b",
        next: {
            value: "c",
            next: {
                value: "d",
                next: {
                    value: "e",
                    next: list
                }
            }
        }
    }
}

console.log(detectHeadCircularLL(list));
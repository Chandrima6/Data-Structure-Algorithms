
//array sorted in ascending order then rotated random times
function searchRotatedArr(arr, search) {
    let head = 0;
    let pointer = arr.length-1;

    function helper(head, pointer) {
        
        if(head===pointer) return arr[pointer];
        
        const mid = Math.ceil((head+pointer)/2);
        if(search===arr[mid]) return mid;
        if(search<arr[mid]){
            if(search<arr[0]) {
                head = mid;
                return helper(head, pointer);
            } else {
                pointer = mid;
                return helper(head, pointer);
            }
        } else {
            head = mid;
            return helper(head, pointer);
        }
    }
    return helper(head, pointer);
}

const arr = [9,10,11,3,4,6];

console.log(searchRotatedArr(arr, 4));
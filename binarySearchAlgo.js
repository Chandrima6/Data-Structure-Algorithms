// O(logn)
//recursive approach
function binarySearch(list, item) {
    if(list.length) {
        if(list[0]===item) return 0;
        if(list[list.length-1]===item) return (list.length-1);
        const mid = Math.floor(list.length/2);
        if(list[mid] === item) return true;
        else{
            if(item < list[mid]) {
                const newList = list.slice(0, mid);
                return binarySearch(newList, item);
            } else {
                const newList = list.slice(mid);
                return binarySearch(newList, item);
            }
        }
    } else {
        return false;
    }
}

// logarithmic complexity - O(logn)
// iterative approach
function binarySearch(list, item) {
    if(list.length && item) {
        let start = 0;
        let end = list.length - 1;
        let mid = Math.floor((start + end)/2);
        while(start!==mid && end !== mid) {
            if(list[mid]=== item || list[start] === item || list[end]=== item) return true;
            else if(item < list[mid]) {
                end = mid;
                mid = Math.floor((start + end)/2);
            } else if(item > list[mid]){
                start = mid;
                mid = Math.floor((start + end)/2);
            } else {
                return false;
            }
        } 
        return false;
    }else {
        return false;
    }
    
}

console.log(binarySearch([2,6,7,90,103], 7));
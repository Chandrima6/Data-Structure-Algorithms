//psuedo code for merge sort algorithm
// divide routine
// mergeSort(list)
//   base case: if list.length < 2, return
//   break the list into halves L & R
//   Lsorted = mergeSort(L)
//   Rsorted = mergeSort(R)
//   return merge(Lsorted, Rsorted)

// merge/conquer routine
// merge(L,R) 
//   new arr = []
//   while(L.length !== 0 || R.length !== 0)
//         if L[0] < R[0] 
//             arr.push(L[0])
//             L.shift()
//         else if L[0] > R[0] 
//             arr.push(R[0]) 
//             R.shift 
//         else 
//              if L.length
//                  arr.push(L[0])
//                  L.shift()
//              else if R.length 
//                  arr.push(R[0])
//                  R.shift()
//   return arr; 

// list = [9,7,12,15,2]

// complexity: O(nlogn)
// logarithmic opeartion
function mergeSort(list) {
    if(list.length < 2) return list;
    const mid = Math.floor(list.length/2);
    // left half of list
    const L = list.slice(0, mid);
    // right half of list
    const R = list.slice(mid);
    const LSorted = mergeSort(L);
    const RSorted = mergeSort(R);
    return merge(LSorted, RSorted);

}

// linear operation
function merge(L, R) {
    const arr = [];
    while(L.length !== 0 || R.length !== 0) {
        if(L[0] < R[0]) {
            arr.push(L[0]);
            L.shift();
            
        } else if(L[0] > R[0]) {
            arr.push(R[0]);
            R.shift();
            
        } 
        else {
            if(L.length) {
                arr.push(L[0]);
                L.shift();
            } else if(R.length) {
                arr.push(R[0]);
                R.shift();
            }
        }
    }
    return arr;
}

console.log(mergeSort([9,7,12,15,2]));
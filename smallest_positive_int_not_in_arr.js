// Time complexity: O(n) since a loop is there 
// Also O(nlog n) as sorting of array is done.

function solution(A) {
    if (!A) return null;
    if (A && A.length === 0) return null;
    if(A.length === 1) return A[0] === 1 ? 2 : 1;
    let posArr = A.filter(val => val > 0).sort((a,b) => (a-b));
    if (posArr[0] !== 1) {
           return 1;
    }
    let output;
    for(let index = 0; index < posArr.length; index ++) {
       if ((index + 1) < posArr.length) {
         if ((posArr[index + 1] - posArr[index]) !== 1 && (posArr[index + 1] - posArr[index]) !== 0) {
            output = posArr[index] + 1;
            break;
          }
        } 
        output = posArr[index] + 1;
     };
     return output;
}

console.log(solution([1,0,1,78,8,1,5,3,0,999,-2,6,1,89,-9876,23,77,12,98,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]));
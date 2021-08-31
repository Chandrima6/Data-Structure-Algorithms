function nextPermutation(num) {
    if (num.length <= 1) return num;
    const tempNum = []
    let char = null;
    for(let i=num.length-1; i>0; i--) {
        tempNum.unshift(num[i])
        if (num[i] && num[i-1] && num[i]>num[i-1]) {
            char = num[i-1];
            num = num.splice(0,i-1)
            break;
        } 
    }
    if (char !== null) {
        const nextBigChar = tempNum.reduce((a,b) => Math.abs(char-a) > Math.abs(char-b) ? b : a);
        tempNum[tempNum.indexOf(nextBigChar)] = char
        num = [...num,nextBigChar,...tempNum.sort()]
        return num;
    } else {
        return num.sort()
    }
    
}

console.log('output',nextPermutation([4,5,2,6,7,3,1]))
console.log('output',nextPermutation([2,1,3]))
console.log('output',nextPermutation([1,1,5]))
console.log('output',nextPermutation([2,3,5,4]))
console.log('output',nextPermutation([1,2,3]))
console.log('output',nextPermutation([3,2,1]))
console.log('output',nextPermutation([1]))
console.log('output',nextPermutation([1,0]))


// 4526731
// 4527136

/*
7 | lowest com of 631
7 | 631 = 136 num - nth num = 631
6731 n>n-1 yes num = 6731
731 n>n-1 no n-- num = 731
31 n>n-1 no n-- num = 31
1 

*/


// 45267691
// 691
//9
//61 = 16
// 45267916
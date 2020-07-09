
// time complexity O(n)
function permutationPalindrome(str) {
    if(str && str.length) {
        str = str.split(' ').join('').split('');
        const length = str.length;
        const cache = new Map();
        for(let i=0; i<length; i++) {
            let charValue = cache.get(str[i]);
            if(!charValue) cache.set(str[i], 1)
            else cache.set(str[i],charValue+1);
        }
        console.log(cache);
        let count = 0;
        for (const [key, value] of cache.entries()) {
            console.log(key, value);
            if(value%2!==0) count++;
            if(count>1) return false;
        }
        return true;
    }
    return false;
}

console.log(permutationPalindrome("tact coa"))
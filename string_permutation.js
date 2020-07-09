function permutation(s1, s2) {
    if (s1 && s2) {
        let count = 0;
        if (s1.length !== s2.length) return false;
        else {
            cache = new Map()
            for (let i=0; i<s1.length; i++) {
                cache.set(s1[i], true);
            }
            for (let i=0; i<s2.length; i++) {
                if (cache.get(s2[i])) count++;
            }
            return count === s1.length;
        }
    } else return false;
    
}

console.log(permutation("dog", "god"))



// dynamic prog is an optimization over brute force which would have a complexity of O(3 to the power n) in this case
// we are caching all repeating values using memoization

function countHopsMEmoize() {
    const cache = new Map();
    const countHopsHelper = (n) => {
        if(n===0) {
            cache.set(n,1);
            return 1;
        }
        let helper1 = 0, helper2 = 0, helper3 = 0;
        if((n-1)>=0) {
            if(cache.get(n-1)){
                console.log('from cache', (n-1));
                helper1 = cache.get(n-1);
            } else {
                console.log('calculate', (n-1));
                helper1 = countHopsHelper(n-1);
                cache.set((n-1), helper1);
            }
        }
        if((n-2)>=0) {
            if(cache.get(n-2)){
                console.log('from cache', (n-2));
                helper2 = cache.get(n-2);
            } else {
                console.log('calculate', (n-2));
                helper2 = countHopsHelper(n-2);
                cache.set((n-2), helper2);
            }
        }
        if((n-3)>=0) {
            if(cache.get(n-3)){
                console.log('from cache', (n-3));
                helper3 = cache.get(n-3);
            } else {
                console.log('calculate', (n-3));
                helper3 = countHopsHelper(n-3);
                cache.set((n-3), helper3);
            }
        }
        return helper1 + helper2 + helper3;
    }
    return countHopsHelper;
}

const countHops = countHopsMEmoize();


console.log(countHops(6));
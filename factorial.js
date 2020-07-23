
// using recursion constant time O(n)
function factorial(n) {
    console.log('numbers', n);
    if(n === 0) return 1;
    if(n === 1) return 1; //  basic case
    // recursive case 
    // appropriate return
    // doing n-1 means we are going close to our base case
    return n * factorial(n-1); 
}

// console.log(factorial(15));
// console.log(factorial(15));


// loop + memoization(caching)
function factorialMemoizeLoop() {
    const cache = {};
    let pointer = 2;
    cache[pointer] = pointer;
    const factorialCalc = ((n) => {
        while(pointer !== n) {
            pointer ++;
            const res = cache[pointer-1] * pointer;
            cache[pointer] = res;
        }
        return cache[pointer];
    });
    return factorialCalc; 
}

const factorialMemLoop = factorialMemoizeLoop();

console.log(factorialMemLoop(15));
console.log(factorialMemLoop(15));


// recursion + memoization of all factorial values using closure technique
// in factorial lets say if we are doing f(8) for first time and second time f(10) => it will extract f(8) from cache and calculate only 9 and 10
function memoize() {
    const cache = new Map();
    const factorialBasic = (n) => {
        let result;
        if(n === 0) {
            cache.set(n, 1);
            return 1;
        }
        if(cache.get(n)){
            console.log('from cache',n)
            result = cache.get(n)
        } else {
            console.log('calculate', n)
            result = n * factorialBasic(n-1);
            cache.set(n, result);
        }
        return result; 
    }
    return factorialBasic;
}
const factorialMemAdv = memoize();

console.log(factorialMemAdv(8));
console.log(factorialMemAdv(15));
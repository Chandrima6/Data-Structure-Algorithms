// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => (n * 10);

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = new Map();

const memoTimes10Cached = (n) => {
    if(cache.get(n)) {
        console.log('getting from cache');
        return cache.get(n)
    } else {
        console.log('calculating');
        cache.set(n, times10(n));
        return times10(n);
    }
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10Cached(9));	// calculated
console.log('Task 2 cached value:', memoTimes10Cached(9));	// cached
console.log('Task 2 cached value:', memoTimes10Cached(9));	// cached
console.log('Task 2 cached value:', memoTimes10Cached(9));	// cached
console.log('Task 2 cached value:', memoTimes10Cached(9));	// cached


// Task 3: Use a local cache using concepts of closure and meoization, instead of cluttering global scope. 
// Memoization with closure - previous function refactored to avoid updating variable in global scope
// we are storing the big return in memoTimes10 
// the returned function is closing over constant cache.
// memoTimes10Func is called once and then cache is defined 
// rest of the time we call the function we are getting returned 
// Since the returned function was defined in a scope where it has another constant cache, 
// it remembers the cache constant value until that scope is not destroyed.

// note: inner function not named and not needed in this scenario but 
// in situations like we are doing recursion and inner function parameter should change in every iteration
// then have to use named function and call inside the outer function passing that particular parameter for initial scenario
// this is known as wrapper pattern in recursion. This also uses closure concept.
const memoTimes10Func = () => {
    const cache = new Map();
    return ((n) => {
        if(cache.get(n)) {
            console.log('getting from cache');
            return cache.get(n)
        } else {
            console.log('calculating');
            cache.set(n, times10(n));
            return times10(n);
        }
    });
}

const memoTimes10 = memoTimes10Func();

console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached
console.log('Task 2 cached value:', memoTimes10(9));	// cached
console.log('Task 2 cached value:', memoTimes10(9));	// cached
console.log('Task 2 cached value:', memoTimes10(9));	// cached


// Task 4: create a generic memoize function instead of hardcoding the operation here for e.g. times10
// In closure a function defined in a scope not only remembers the variables defined in its parent scope 
// when executed in a different scope but also remembers all parameters passed to the parent scope 
// Generic memoize function
const memoize = (cb) => {
    const cache = new Map();
    return ((n) => {
        if(cache.get(n)) {
            console.log('getting from cache');
            return cache.get(n)
        } else {
            console.log('calculating');
            const result = cb(n)
            cache.set(n, result);
            return result;
        }
    });
}
const memoMemoizeTimes10 = memoize(times10);

console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoMemoizeTimes10(9));	// calculated
console.log('Task 2 cached value:', memoMemoizeTimes10(9));	// cached
console.log('Task 2 cached value:', memoMemoizeTimes10(9));	// cached
console.log('Task 2 cached value:', memoMemoizeTimes10(9));	// cached
console.log('Task 2 cached value:', memoMemoizeTimes10(9));	// cached




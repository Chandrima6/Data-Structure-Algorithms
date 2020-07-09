//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

// we are adding elements to cache object as input grows same amount of elements gets added 
// so a linear space complexity - which is a trade of we are doing to decrease time complexity from quadratic to linear
const uniqSort = function(arr) {
    const cache = new Map();
    arr.forEach(element => {
        if(cache.get(element)) {
            return false;
        }else {
            cache.set(element, true);
        }
    });
    arr = [...cache.keys()];
    return arr.sort((a, b) => a - b);
};

console.log(uniqSort([4,2,2,3,2,2,2])); // => [2,3,4]
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const pairs = {
        "2": ["a","b","c"],
        "3": ["d","e","f"],
        "4": ["g","h","i"],
        "5": ["j","k","l"],
        "6": ["m","n","o"],
        "7": ["p","q","r","s"],
        "8": ["t","u","v"],
        "9": ["w","x","y","z"]
    }
    let nums = digits.split('');
    nums = nums.map(key => pairs[key.toString()]);
    
    // nums = [['a','b','c'],['d','e','f'],['g','h','i']];
    // nums = [['a','b','c']]
    const combineMerge = (arr2, arr1) => {
        // console.log(arr2, arr1);
        const output = [];
        for(let i=0; i<arr2.length; i++) {
            let elem = arr1.join(arr2[i] + ',') + arr2[i];
            elem  = elem.split(',');
            output.push(elem);
        }
        return output.join().split(',');
    };
    const helper = (nums) => {
        if(nums.length===1) return nums;
        // combine and merge nums[length-1] & nums[length-2]
        const lastElem = combineMerge(nums[nums.length-2], nums[nums.length-1]);
        nums.pop();
        nums.pop();
        nums.push(lastElem);
        helper(nums);
    }
    helper(nums);
    
    nums = nums.join().split(',');
    nums = nums.map(item => item.split('').reverse().join(''));
    return nums;
};

// input "23"
// output ["ad","ae","af","bd","be","bf","cd","ce","cf"]
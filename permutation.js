
var permute = function(nums) {
    const results = [];
    const helper = (nums, pluck) => {
        if(nums.length === 2) {
            const temp1 = nums[0];
            const temp2 = nums[1];
            results.push([...pluck, temp1, temp2]);
            results.push([...pluck, temp2, temp1]);
        }
        else {
            for(let i=0; i<nums.length; i++) {
                const pluckElem = nums[i];
                const updateArr = nums.filter(key => key!==pluckElem);
                helper(updateArr, [...pluck, pluckElem]);
            }
        }
        
    }
    helper(nums, []);
    return results;
};

// const perm = a => a.length ? a.reduce((r, v, i) => [ ...r, ...perm([ ...a.slice(0, i), ...a.slice(i + 1) ]).map(x => [ v, ...x ])], []) : [[]]

// console.log(perm([1,2,3,4,5,6,7,8]));

console.log(permute(["a","b","c","w","x","y","z"]))

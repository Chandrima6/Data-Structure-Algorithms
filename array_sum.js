function array_sum(arr) {
    if (arr.length > 1) {
        const sum = arr.reduce((a,b) => a+b);
        arr.forEach((elem, index) => {
            arr[index] = sum - elem;
        });
    }
    return arr;
}


console.log(array_sum([-1,1,0,-3,3]))

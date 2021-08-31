const modifiedArr = []
function flatten_array(arr) {
    if (arr.length > 0) {
        if (arr[0] instanceof Array) {
            const childArr = arr.shift()
            flatten_array(childArr)
        } else {
            modifiedArr.push(arr[0])
            arr.shift()
        }
        flatten_array(arr)
        if (arr.length === 0) {
            return modifiedArr
        }
    }
}

console.log(flatten_array([[[[[[[[[[1,[0]]]]]]]]]]]))

// time complexity = O(n2) quadratic since each item compared with another
// a = ascending d = descending
function bubbleSort(list, order) {
    for(let i=0; i<list.length; i++) {
        let count = 0;
        while(count <= list.length) {
            if((list[count] > list[count+1]) && order === 'a') {
                let tmp = list[count];
                list[count] = list[count+1];
                list[count+1] =tmp;
            }
            if((list[count] < list[count+1]) && order === 'd') {
                let tmp = list[count];
                list[count] = list[count+1];
                list[count+1] =tmp;
            }
            count++;
        }
    }
    return list;
}

console.log(bubbleSort([9,7,1,1,4], 'a'));
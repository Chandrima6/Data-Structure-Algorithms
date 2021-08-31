//rain water trap
/*
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/

// var trap = function(height) {
//     // identify wells
//     const wells = [];
//     let head = 0;
//     let tail = 1;
//     const helper = (height, alternate) => {
//         console.log('height', height);
//         while(tail <= height.length - 1) {
//             console.log('head = tail', head, tail)
//             const start = height[head];
//             if (start <= height[tail]) {
//                 if (alternate) wells.push(height.slice(head, tail+1));
//                 else wells.push(height.slice(head, tail));
//                 head = tail;
//             }
//             tail++;
//         }
        
//     }
//     helper(height, false);
//     while (head + 1 !== tail) {
//         console.log('head, tail', head, tail)
//         console.log('before slice', height)
//         height = height.slice(head + 1, tail);
//         head = 0;
//         tail = 1;
//         helper(height, true);
//     }
    
//     console.log('wells', wells);
//     sum = 0;
//     wells.forEach(item => {
//         if (item.length !== 1) {
//             const start = item[0];
//             item.forEach(elem => sum = sum + Math.abs(start - elem));
//         }
//     });
//     return sum;
// };


function trap (height) {
    // convert to 2D array start with 0 for both x and y axis
    // each row sum number of 0s enclosed by 1s
    // sum up all the rows
    const list = [...height];
    yVal = height.sort((a,b)=>b-a)[0];
    xVal = height.length - 1;
    console.log(xVal, yVal);
    array2D = [];
    for (let i=0; i<=yVal; i++) {
        const row = [];
        for (let j=0; j<=xVal; j++) {
            row.push(0);
        }
        array2D.push(row);

    }
    console.log(array2D);
    console.log('height', list);
    list.forEach((key, index) => {
        console.log('row', index);
        console.log('column', key)
        for (let i=(yVal-key); i<=yVal; i++) {
            array2D[i][index] = 1;
        }
        // console.log(array2D);
    });
    console.log(array2D);
    let sum = 0;
    let head = 0;
    let tail = head + 1;
    array2D.forEach(item => {
        console.log(head, tail);
        console.log(item);
        while (array2D[head] === 1 && tail <= item.length - 1) {
            if (array2D[tail] === 1) {
                sum = sum + (tail-head)
                head ++;
            }
        }
        tail++;
        console.log(sum);
    })
    // console.log('sum', sum);
    return sum;
}


// console.log('water', trap([0,1,0,2,1,0,1,3,2,1,2,1]))
// console.log('water',trap([4,2,0,3,2,5]))
// console.log('water',trap([4,2,3]))
// console.log('water',trap([5,4,1,2]));
// console.log('water', trap([5,5,1,7,1,1,5,2,7,6]));
// console.log('water', trap([0,7,1,4,6]))
console.log('water', trap([6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3]));


// [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0 ],
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0 ],
//   [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
//   [ 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1 ],
//   [ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1 ],
//   [ 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ]
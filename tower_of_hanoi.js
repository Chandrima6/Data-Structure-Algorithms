function moveDisks(n, start, buffer, dest) {
    const moveTop = () => {
        const temp = start.pop();
        dest.push(temp);
    }
    if(n===1) {
         moveTop()
         return;
    }
    moveDisks(n-1, start, dest, buffer);
    moveTop();
    moveDisks(n-1, buffer, start, dest);
    return [start, buffer, dest];
}

// three vertical towers => source, buffer, destination
// source tower has n rings with biggest at the bottom and smallest at the top
// job is to move the rings and place in destination tower in same order.
console.log(moveDisks(3, [3,2,1], [], []));
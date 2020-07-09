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


console.log(moveDisks(3, [3,2,1], [], []));
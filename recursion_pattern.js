// wrapper function pattern
// wrapper solution pattern uses closure with recursion to keep track of the parameters 
// passed while the accumulator is not using that.
function wrapperFnLoop(start, end) {
    function recurse(i) {
      console.log(`looping from ${start} until ${end}`);
  
      if(i < end) {
        recurse(i + 1);
      }
    }
  
    recurse(start);
}

// accumulator pattern


function MemoFnLoop(i, end) {
    console.log(`looping from ${i} until ${end}`);
    if(i < end) {
      MemoFnLoop(i + 1, end);
    }
}
  
console.log('~~~ wrapperFnLoop ~~~')
wrapperFnLoop(1,5);
console.log('~~~ MemoFnLoop ~~~')
MemoFnLoop(1, 6);

//recursion to iteration conversion

//recursion
function joinElementsRecurse(array, joinString) {
    function recurse(index, resultSoFar) {
      resultSoFar += array[index];
  
      if(index === array.length - 1) { //  basic case
        return resultSoFar;
      } else {
        return recurse(index + 1, resultSoFar + joinString); //  recursive case & appropriate return
      }
    }
    return recurse(0, ''); 
  }

//iteration
function joinElementsIteration(array, joinString) {
    let result = '';
    for(let i = 0 ; i <= array.length - 1; i ++) {
        if(i === array.length - 1) result = result + array[i];
        else result = result + array[i] + joinString;
    }
    return result;
}
  
console.log(joinElementsIteration(['s','cr','t cod', ' :) :)'], 'e'));
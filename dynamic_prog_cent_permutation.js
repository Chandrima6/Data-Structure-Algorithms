// not working perfectly
// showing duplicate combination which in this case should be omitted but same logic 
// duplicates also counted for staircase hop problem.

function representCents(n) {
    console.log(n);
    if(n===5)return 1;
    let fiveCents = 0, tenCents = 0, twetyFiveCents = 0;
    if((n-5)>0){
        fiveCents = representCents(n-5)
    }
    if((n-10)>0){
        tenCents = representCents(n-10)
    }
    if((n-25)>0){
        twetyFiveCents = representCents(n-25)
    }
    return fiveCents + tenCents + twetyFiveCents;

}

console.log('Times', representCents(25));
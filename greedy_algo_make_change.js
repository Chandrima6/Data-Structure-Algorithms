// Write a function, makeChange, that returns an integer that 
//represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25



// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10) 

//locally optimal solution
function makeChange(coins, amount) {
    coins = coins.sort((a,b) => b-a);
    console.log(coins);
    let count = 0 ;
    let totalCoins = 0;
    while(amount > 0) { //5>0
        if(coins[count]<=amount) {// 5<=5
            amount = amount - coins[count]; // 0
            totalCoins++;//3
        } else {
            count++; // 2
        }
        
    }
    return totalCoins;//3
}

console.log(makeChange([5,10,25], 55))
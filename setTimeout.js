for(var i=0; i<5; i++) {
    setTimeout(function(){
        console.log('Var i is ', i);
    }, 1000)
    console.log('i am outside var');
}

for(let i=0; i<5; i++) {
    setTimeout(function(){
        console.log('Let i is ', i);
    }, 1000)
    console.log('i am outside let');
}

// setTimeout calls first goes to call stack and then webapi section 
// when the timeout 1000 ms is complete it is pushed to call queue
// only when all operations in call stack are complete then only 
// first setTimeout operation from call queue will be executed.
/*
output:
i am outside var
i am outside var
i am outside var
i am outside var
i am outside var
i am outside let
i am outside let
i am outside let
i am outside let
i am outside let
Var i is  5
Var i is  5
Var i is  5
Var i is  5
Var i is  5
Let i is  0
Let i is  1
Let i is  2
Let i is  3
Let i is  4
*/
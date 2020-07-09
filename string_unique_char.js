//convert string to array of chars // ["h","e","l","l","o"]
//loop through the list
//check each element with other

//complexity - O(n2)
// can be done by sorting first and the bianry search
function unique(string) {
    if(string.length) {
        if(string.length === 1) return true;
        else {
            string = string.split('');
            for (let i=0; i<string.length; i++) {
                for (let j=i+1; j<string.length; j++) {
                    if (string[i] === string[j+1]) return false;
                } 
            }  
            return true
        }
    }else return false;
}

console.log(unique("hello"))


    
    
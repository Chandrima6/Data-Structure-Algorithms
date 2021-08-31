let count = 0;
originalWord = 'madammadam';
function isPalindrome(word) {
    const bword = word.split('').reverse().join('');
    if (word === bword) {
        return true;
    }
    else {
        const tmpWord = originalWord.split(''); 
        tmpWord.splice(count , 1); 
        word = tmpWord.join('');
        count++;
        if (count !== originalWord.length + 1) return isPalindrome(word)
    }
    return false;
}

console.log(isPalindrome(originalWord))


// p,l,o,p
// p,o,l,p

// a,b,c
// c,b,a

// p,o,m,p,o,p,o,p,o,p
// p,o,p,o,p,o,p,m,o,p


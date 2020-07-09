
//properly nested string 
// srting only has brackets

function solution(S) {

    // null and empty string check
    if(S!== null && S==='') return 1;
    const visited = [];
    let count = 0;
    let noBracketEndCheck = 0;

    const charMatch = {
        "[":"]",
        "{":"}",
        "(":")"
    }

    // convert string to array of chars
    S = S.split('');

    for(let i=0; i<S.length; i++) {
        if(S[i] === '[' || S[i] === '{' || S[i] === '(') {
            visited.push(S[i]);
        } else {
            noBracketEndCheck++; // never closed any bracket, increment this variable 
            if(S[i] === ']' || S[i] === '}' || S[i] === ')') {
                const lastChar = visited[visited.length-1];
                if(S[i] !== charMatch[lastChar]) count++; // check what should be the closing bracket
                else visited.pop(); // if match happens then pop out the matched start bracket
            }
        }
    }
    if(count > 0 || noBracketEndCheck === 0 || visited.length > 0) {
        return 0;
    }
    return 1;
}

console.log(solution("[{})]"));
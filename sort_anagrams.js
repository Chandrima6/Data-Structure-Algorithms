function sortAnagrams(strArr) {
    let sortedWords = [];
    const store = {};
    strArr.forEach(element => {
        console.log(element);
        const elem = element.split('').sort().join('');
        console.log(elem);
        sortedWords.push(elem);
    });
    console.log(sortedWords);
    sortedWords.forEach((element, index) => {
        console.log(element);
        if(!store[element]) {
            store[element] = [];
        } 
        store[element].push(strArr[index]);
    });
    sortedWords = [];
    console.log(store);
    for(let item in store) {
        console.log(item);
        sortedWords.push(...store[item]);
    }
    console.log(sortedWords);

}

sortAnagrams(["cat", "dog","god","tac","tad","act"])
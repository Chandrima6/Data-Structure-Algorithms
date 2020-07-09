function sparseSearch(strArr, search) {
    const n = strArr.length * 2;
    const hashTable = new Map();
    search = _hash(search, n);
    strArr.forEach((element, parentIndex) => {
        const index = _hash(element,n);
        console.log(element, index);
        hashTable.set(index, parentIndex);
    });
    console.log(hashTable);
    function _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++)
            sum += str.charCodeAt(i) * 3

        return sum % n;
    }
    return hashTable.get(search);
}

const strArr = ["at","","","","ball","","","car","","","dad","",""]
console.log(sparseSearch(strArr, "dad"));
function replaceSpace(s1, length) {
    if (s1 && s1.length) {
        s1 = s1.split(" ")
        s1 = s1.join("%20")
        return s1;
    } else return false;
}

console.log(replaceSpace("  hello world       i am chan       "));
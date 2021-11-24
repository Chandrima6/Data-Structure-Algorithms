function findStringWindow(s, t) {
    console.log(s.includes(t))
}

const s = 'ADOBECODCEBANC';
const t = 'ABC'

/* 
a : [0,11]
b: [3,10]
c: [5,8,13]
[0,3,5,8,10,11,13]
occ1: 0-3-5 = 5 ADOBEC
occ2: 8-10-11 = 3 CEBA
occ3: 10-11-13 = 3 BANC
s:A,B
e:A,D,O,B,E,C
p:A,B,C
arr: [ADOBEC]

s:A,B,C
e:B,E,C,O,D,C
p:A,B,C
arr: [ADOBEC, BEC]
*/
console.log(findStringWindow(s,t))


const s1 = 'abbefghcbjha';
const t1 = 'abc'
/*
a:[0,11]
b: [1,2,8]
c: [7]
[0,1,2,7,8,11]
occ1: 0-1-7
occ2: 0-2-7
occ3: 
*/
console.log(findStringWindow(s1,t1))
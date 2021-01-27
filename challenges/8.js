"use strict"

const myObject1 = {
    key1: true,
    key5: 10,
    key3: "abc",
    key4: null,
    key10: NaN
}

for (let i in myObject1){
    if(i === "key1" || i === "key3"){
        console.log(myObject1[i])
    }
}


//challenges

const myNumbers = [
    2355,
    7235,
    8135,
    1762,
    2361,
    8351
]

let newRandomNumber = Math.floor(Math.random() * 10000) + 1000;

for (let i in myNumbers){
    if(newRandomNumber === myNumbers[i]){
        let newRandomNumber = Math.floor(Math.random() * 10000) + 1000;
    }
}
myNumbers.push(newRandomNumber)
console.log(myNumbers)


"use strict"

const myObject1 = {
    key1: true,
    key5: 10,
    key3: "abc",
    key4: null,
    key10: NaN
}

for (let i in myObject1){
    console.log(i, myObject1[i])
}
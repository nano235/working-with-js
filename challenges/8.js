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
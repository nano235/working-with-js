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

let newRandomNumber = Math.floor(Math.random() * 1000) + 1000 //creates a random number
console.log(newRandomNumber)//checks to see what the random number is

for (let i in myNumbers){//iterates over the array
    if(newRandomNumber === myNumbers){//compares the random number with each value of the array
        newRandomNumber = Math.floor(Math.random() * 10000) + 1000//if the random number is equal to any value in the array, it creates another
    }
}
myNumbers.push(newRandomNumber)//adds the random number to the array if it meets the condition in the for loop
console.log(myNumbers)

//another way of doing same comparism

let MAX = 9999
let MIN = 1000
let randomNumber

function getRandomNumber (max, min){
    randomNumber = Math.floor(Math.random() * (max - min) + min)
    return randomNumber
}


function theLoop (randomNumber){
    for (let i of myNumbers){
        if (randomNumber === myNumbers){ 
            return
        }
    }
}

do{
    randomNumber = getRandomNumber(MAX, MIN)
}while(
    theLoop(randomNumber)
)

myNumbers.push(randomNumber)
console.log(myNumbers)


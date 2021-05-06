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

//Tutors solution to the challent

let MAX = 9999
let MIN = 1000
let randomNumber

function getRandomNumber (max, min){
    randomNumber = Math.floor(Math.random() * (max - min) + min)
    return randomNumber
}

//the loop function

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


//Refractoring my own solution using the same array

//The max and min numbers you want it to generate
let MAX_NUMBER = 9999
let MIN_NUMBER = 1000
let randNumber

function generateRandnum (min, max) {
    randNumber = Math.floor(Math.random() * (max - min) + min)
    console.log(randNumber)
    return randNumber
    //this generates a number between 0 - 0.99999999999999999... and then multiplies it by the
    //(max - min) which multiplies it by a value equal to the max value subtracted by the min value
    // and then add the min value to show a number between the max and min. The floor then removes the decimals
}

function loop (randNumber) {
    for (let i of randNumber) {
        if (randNumber === myNumbers) {
            return randNumber
        }
    }
}

randNumber = generateRandnum(MIN_NUMBER, MAX_NUMBER)

myNumbers.push(randNumber)
console.log(myNumbers)

//I honestly didn't see the need for the "do while" loop used by my instructor, so I skipped it


//Challenges
// create an object with name, age and city, then add country to the Object.protype.country
// iterate over the object, console.log all the values excluding the Object.protype.country

//solution
const myObjects = {
    Name: "Mike",
    age: 30,
    city: "London"
}

Object.prototype.country = "England"


for (let key in myObjects) {
    if (myObjects.hasOwnProperty(key)) {
       console.log(myObjects[key]);
    }
}




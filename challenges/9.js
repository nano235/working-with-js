//Use typeof/instanceof operator to check types
"use strict"

let q = {
   1: [],
   2: {},
   3: "",
   4: 3,
   5: null,
   6: true
}
let type 

function checkType(value) {
    for (let i in value) {
     type = typeof value[i]
     if (type === "object") {
         if (value[i] instanceof Array) {
             console.log("This is an Array")
         } else {
             console.log("This is an Object")
         }
     } else {
         console.log("This is a " +type)
     }
    }
 }


checkType(q)

//I looped over an object and checked the typeof of each value, then I went on to check the instanceof to 
//differentiate an array from an object




// Practicing with call, apply and bind methods, also using this

const h = {
    home: "Asaba",
    name: "Nano",
    age: 17,
    netWorth: "uncountable",
    x: function () {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, I stay in ${this.home}, and my networth is ${this.netWorth}`)
    }
}


const p = {
    home: "Lagos",
    name: "Nano",
    age: 19,
    netWorth: "uncountable",
}


h.x.call(p);
h.x.apply(p);
let w = h.x.bind(p)
w()

//Create a function that will add custom method to the global object "window"
function addCustomGlobalMethod(globalWindow) {
    globalWindow.customMethod = function () {
        console.log("Greeting from the customMethod");
    }
}


addCustomGlobalMethod(this);

this.customMethod();

customMethod()



//Immediately Invoked Function Expression IIFE
//Using same code from above

// (function (globalWindow) {
//     globalWindow.customMethod = function () {
//         console.log("Greeting from the customMethod");
//     }
// })(this);

// this.customMethod();

// customMethod()

//The IIFE gives an error in "use strict", hence it is commented out

//Another way of using IIFE

// (function () {
//     this.customMethod = function () {
//         console.log("Greeting from the customMethod");
//         return
//     }
//     return
// })();

// this.customMethod();

// customMethod()


//Another Challenge

//Create a function "waitingFn" with single parameter "timeInMs" and inside of the function create a "while"
// loop and this loop should be running during "timeInMs"



function waitingFn(timeInMs) {
    let start = Date.now() + timeInMs
    while (start > Date.now()) {
        //Do nothing
    }
}


waitingFn(3000)

console.log('The function call has ended')













//Use typeof/instanceof operator to check types

let x = {
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


checkType(x)

//I looped over an object and checked the typeof of each value, then I went on to check the instanceof to 
//differentiate an array from an object

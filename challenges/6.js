"use strict"

let v = [0,1,2,3,4,5]

console.log(v)

/*Challenge*/

const array1 = [true, null]
array1.unshift("Hello")
array1.unshift(100)
console.log(array1)

const array2 = [1,2]
array2[10] = "abc"
console.log(array2)

const arrayOfCars = [
    {
        name: "Audi",
        price: 45000
    },
    {
        name: "Benz",
        price: 65000
    },
    {
        name: "BMW",
        price: 55000
    },
    {
        name: "Volkswagen",
        price: 35000
    }
]

arrayOfCars.push({
    name: "Aston Martins",
    price: 125000
})

console.log(arrayOfCars)
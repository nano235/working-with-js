/**
 * CHALLENGE 1-2 TASK
 *
 * Find all menu elements by selector ".nav-link"
 * or by className "nav-link".
 *
 *  Use "for" loop to iterate through all menu items
 * Inside of the loop add "onclick" event handler to
 * each menu item.
 *
 * In the "onclick" event handler:
 * 1. Remove first "active" class from all
 * menu elements
 * 2. Add "active" class to the clicked menu element
 * 3. Log to the console message with the name
 * of the clicked menu item
 */
"use strict"


const getNavLink = document.querySelectorAll('.nav-link')
const linkLength = getNavLink.length


for (let i = 0; i < linkLength; i++) {
    const links = getNavLink[i]
    links.onclick = function (){
        for (let j = 0; j < linkLength; j++) {
            getNavLink[j].classList.remove('active')
        }
        links.classList.add('active')
        console.log(links.innerHTML);
    }
    
}



var getBtn = document.getElementById("btn")
var count = 0

// arrow functin
getBtn.addEventListener("click", () => { 
    getBtn.innerHTML = `Button clicked ${++count} times`
    console.log("I have been clicked")
});

// normal function
// getBtn.addEventListener("click", function () { 
//     getBtn.innerHTML = `Button clicked ${++count} times`
//     console.log("I have been clicked")
// });




// CHALLENGE

const myCities = ["London", "New York", "Singapore"];

/* Create a function called "arrayInfo" that will return string like 
"London is located at the index 0 in the myCities array" */

/* Iterate over the "myCities" array, call "arrayInfo" 
    function for each of the elements and print result of the 
    call to the console */

// Option 1: "for"

// Option 2: "forEach"

// Solution

const arrayInfo = (element, index) => `${element} is located at index ${index} in the myCities array`;
// Option 1

for (let i = 0; i < myCities.length; i++) {
    console.log(arrayInfo(myCities[i], i));
}

// Option 2
myCities.forEach ((element, index) =>
    console.log(arrayInfo(element, index))
)












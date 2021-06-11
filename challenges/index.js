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


// CHALLENGE

const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}'
  ];
  
  /* From the "postsJSON" array create "posts" array that will consist of JavaScript objects */

//   SOLUTION

const posts = postsJSON.map(post => JSON.parse(post)) //my solution

// const posts = postsJSON.map(JSON.parse) //instructor's solution
  console.log(posts);


//   CHALLENGE

const Posts = [
    { postId: 1355, commentsQuantity: 5 },
    { postId: 5131, commentsQuantity: 13 },
    { postId: 6134, commentsQuantity: 2 }
  ];
  
  /* Create a function "findSinglePost" that will have two parameters - 
    "postId" and "posts" and will return object with matched "postId".
    If post wasn't found - return "undefined"
  */
  
// Solution

const findSinglePost = (postId, Posts) => Posts.find(post => post.postId === postId)

  console.log(findSinglePost(6134, Posts)); // { postId: 6134, commentsQuantity: 2 }
  
  console.log(findSinglePost(4511, Posts)); // undefined



//   CHALLENGE

const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

/*
Create a function "arrayCheck" with one parameter - "inputArray".
If at least one element in the array is not a number - return "Some elements are not numbers".
If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".
If numbers in the array are sorted in descending order - return "Array is sorted is descending order".
If array is not sorted - return "Array is not sorted"
*/

// Solution

const arrayCheck = inputArray => {
    if (inputArray.some(element => typeof element !== "number")) 
        return"Some elements are not numbers"
    else if (inputArray.every((element, index, array) => 
        index > 0
        ? element >= array[index - 1]
        : true)) return "Array is sorted in ascending order"
    else if (inputArray.every((element, index, array) => 
        index > 0
        ? element <= array[index - 1]
        : true)) return "Array is sorted in descending order"
    else return "Array is not sorted"
}

console.log(arrayCheck(a)); // Some elements are not numbers
console.log(arrayCheck(b)); // Array is sorted is ascending order
console.log(arrayCheck(c)); // Array is sorted is descending order
console.log(arrayCheck(d)); // Array is not sorted




// CHALLENGE

const A = [1, 2, 3];
const B = [1, 2, 3];

console.log(A === B); // false

/* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo". 
If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".
Otherwise return "false". */

// Solution

const arraysAreEqual = (arrayOne, arrayTwo) => { 
    if(arrayOne.length != arrayTwo.length) return false;

    return arrayOne.every((element, index) => element === arrayTwo[index]);
}
const C = [2, 1, 3];
const D = [1, 2, 3, 4];

console.log(arraysAreEqual(A, B)); // true
console.log(arraysAreEqual(A, C)); // false
console.log(arraysAreEqual(A, D)); // false





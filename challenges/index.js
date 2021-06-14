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



// CHALLENGE
const transport = ["Bus", "Car", "Bicycle", "Airplane"];

/* Create a function "elementFound" with two parameters "inputArray" and "searchElement".
If "searchElement" is found in the "inputArray" - return "true".
Otherwise return "false"
Hint: Use "some" helper method to solve this
*/

// Solution

const elementFound = (inputArray, searchElement) => {
    return inputArray.some(element => element === searchElement)
}

console.log(elementFound(transport, "Bus")); // true
console.log(elementFound(transport, "Phone")); // false
console.log(elementFound(transport, "Airplane")); // true


// CHALLENGE

const tags = [
    ["javascript", "es6"],
    ["css", "flexbox"],
    ["html", "web-browser"]
  ];
  
  const fruits = [
    { title: "Orange", quantity: 10 },
    { title: "Banana", quantity: 5 },
    { title: "Apple", quantity: 25 }
  ];
  
  const primitiveTypesArray = [
    25,
    "x",
    true,
    undefined,
    null
  ];
  
  /* Create a function "elementIsIncluded" with two parameters "searchElement" and "array". 
  If type of the "searchElement" is object or array, you need to convert each element in the 
  "array" to the string and then apply "includes" method with argument that will be also converted to the string.
  If type of the "searchElement" is not an object or array - simply apply "includes" method and return result
  */


//   Solution

const elementIsIncluded = (searchElement, array) =>{
	if(typeof searchElement !== "object") return array.includes(searchElement);
	return array.map ((element) =>  JSON.stringify(element)).includes(JSON.stringify(searchElement))
}

  
  console.log(elementIsIncluded(["css", "flexbox"], tags)); // true
  
  console.log(elementIsIncluded(["flexbox", "css"], tags)); // false
  
  console.log(
    elementIsIncluded( { title: "Apple", quantity: 25 },
      fruits
    )
  ); // true
  
  console.log(elementIsIncluded({ title: "Banana" }, fruits)); // false
  
  console.log(elementIsIncluded(25, primitiveTypesArray)); // true



//   CHALLENGE

const myNumbers = [123, 50, 27];

/* Create a function "pushIfUnique" with two parameters "inputArray" and "newElement".
If "inputArray" already contains "newElement" print "{newElement} is already in the array" to the console.
Otherwise push "newElement" to the "inputArray". 
NOTE: We assume that "inputArray" may contain only primitive variables types
*/

// Solution

const pushIfUnique = (inputArray, newElement) => {
	if(inputArray.includes(newElement)) console.log(`${newElement} is already in the array`)
	else inputArray.push(newElement)
}

pushIfUnique(myNumbers, 50); // "50 is already in the array"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 is already in the array"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]


// CHALLENGE

const statusUpdate = [
	{
	  title: "How to find JavaScript developer job?",
	  postId: 3421,
	  comments: 25
	},
	{
	  title: "Is it hard to learn ES6?",
	  postId: 5216,
	  comments: 3
	},
	{
	  title: "Should I learn React or Angular?",
	  postId: 8135,
	  comments: 12
	}
  ];
  
  const minimalComentsQty = 10;
  
  /* Create a function "popularPostsIds" with two parameters "posts" and "minimalComentsQty".
  This function "popularPostsIds" should return an array of postIds of posts that have quantity 
  of "comments" at least equal to "minimalComentsQty"
  */

//   Solution


const popularPostsIds = (posts, minimalComentsQty) => {
	return posts.reduce((popularPosts, post) => {
		if (post.comments >= minimalComentsQty) {
			popularPosts.push(post.postId);
		}	
		return popularPosts;
	}, [])
}
  
  console.log(popularPostsIds(statusUpdate, minimalComentsQty)); // [3421, 8135]



  // Mini self challenge


  const tree = {
    id: "x",
    special: "special",
    children: [
        {
            id: "y",
        },
        {
            id: "z",
            ordinary: "special",
            special: "special",
            children: [
                {
                    id: "m", 
                    children: [
                        {
                            id: "n",
                        },
                    ],
                },
            ],
        },
    ],
};

const flattenedTree = {
    x: { id: "x", special: "special", children: ["y", "z"] },
    y: { id: "y", parentId: "x" },
    z: {
        id: "z",
        children: ["m"],
        parentId: "x",
        ordinary: "special",
        special: "special",
    },
    m: { id: "m", children: ["n"], parentId: "z" },
    n: { id: "n", parentId: "m" },
};

// Write a function which takes the flattenedTree and finds the nearest ancestor which has a given property
// return the id of the ancestor which has the given property
// or return undefined

function findPropertyInTree(startId, treeArray, propertyName){
	// write your function here
	// check if startId has a parent;
	// parentId is present
	// check if parent has propertyName
	// if yes return parentId 
	// if not, new item is parent and check for parent id of new item

	let ancestorId;
	let parent = treeArray[startId].parentId;
	// if(typeof parent !== "undefined"){
	// 	if(typeof treeArray[parent][propertyName] !== "undefined") return parent;

	// 	if(typeof treeArray[parent].parentId !== "undefined"){
	// 		parent = treeArray[parent].parentId		
	// 		if(typeof treeArray[parent][propertyName] !== "undefined") {
	// 		return parent;}
	// 	}
	// }

	// return ancestorId;


		while (parent) {
      if (typeof parent === 'undefined')return undefined
      if(typeof treeArray[parent][propertyName] !== "undefined")return parent
      parent = treeArray[parent].parentId	
		}
}

console.log(findPropertyInTree("m", flattenedTree, "anything")); // undefined
console.log(findPropertyInTree("y", flattenedTree, "special")); // x
console.log(findPropertyInTree("n", flattenedTree, "special")); // z
console.log(findPropertyInTree("n", flattenedTree, "ordinary")); // z
console.log(findPropertyInTree("z", flattenedTree, "special")); // x
console.log(findPropertyInTree("x", flattenedTree, "special")); // undefined



// CHALLENGE

const products = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories"
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones"
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories"
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches"
  }
];


/* Create a function "quantityByCategories" with one parameter "products".
This function "quantityByCategories" should return an object with keys equal 
to categories and values equal to sum of all quantities in each category.
*/


// Solution

const quantityByCategories = products => {
  return products.reduce((items, cart) => {
    items[cart.category] = (items[cart.category] || 0) + cart.quantity
    return items
  }, {})
}


console.log(quantityByCategories(products));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */



// CHALLENGE

const persons = [
  {
    name: "Andy",
    friendsQty: 10,
    index: 1
  },
  {
    name: "Mike",
    friendsQty: 5,
    index: 2
  },
  {
    name: "Sophia",
    friendsQty: 10,
    index: 3
  },
  {
    name: "Joshua",
    friendsQty: 3,
    index: 4
  },
  {
    name: "John",
    friendsQty: 10,
    index: 5
  },
  {
    name: "Gabriella",
    friendsQty: 8,
    index: 6
  },
  {
    name: "Tyler",
    friendsQty: 7,
    index: 7
  },
  {
    name: "Dylan",
    friendsQty: 2,
    index: 8
  },
  {
    name: "Sarah",
    friendsQty: 5,
    index: 9
  },
  {
    name: "Alexa",
    friendsQty: 10,
    index: 10
  },
  {
    name: "Henry",
    friendsQty: 10,
    index: 11
  },
  {
    name: "Arianna",
    friendsQty: 10,
    index: 12
  }
];

/* Create a function "sortPersonsByFriendsQty" with one parameter "persons".
This function "sortPersonsByFriendsQty" should sort input array of persons 
by friendsQty of each person in ascending order and return resulting array.
*/

// Solution

const sortPersonsByFriendsQty = persons => {
  persons.sort((a, b) => a.friendsQty - b.friendsQty)
}

sortPersonsByFriendsQty(persons);
/* Which sorting algorithm is used here in Google Chrome, Firefox, Node.js? 
Is this sorting stable or not?
*/

console.log(persons);
/* Array of persons sorted by friendsQty in ascending order 
*/





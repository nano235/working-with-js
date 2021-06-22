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


// CHALLENGE

/* Create a function "taggedTemplate" that will return a regular string (not template literal).
Use appropriate method of the function definition and needed amount of arguments.
Use all knowledge gained in the previous sections.
IMPORTANT: Input template literal may have *ANY* quantity of the expressions. 
NOTE: If you are stuck - hints down below!
*/

// FIRST test case
const ab = 10;
const ba = 5;
const sum = taggedTemplate`Sum of the two variables a(${ab}) and b(${ba}) is ${ab + ba}`;

console.log(sum);
/* Sum of the two variables ab(10) and ba(5) is 15 */

// SECOND test case
const girl = "Alice";
const boy = "Bob";
const friendsInfo = taggedTemplate`${girl} and ${boy} are friends!`;

// Solution

function taggedTemplate(strArr, ...keys) {  
  let arr = [strArr[0]];
  // keys.forEach((key, i) => {
  //   arr.push(key, strArr[i + 1])
  // })

  return keys.reduce((key, n, i) => {
    key.push(n, strArr[i + 1])
    return key
  }, [strArr[0]]).join('');

  // return arr.join("");
}

console.log(friendsInfo);
/* Alice and Bob are friends! */

/* HINTS
1. Use regular function declaration instead of anonymous arrow function expression assigned to the variable.
In such way you will get access to the "arguments" inside of the function
2. First argument in the function is array of strings
3. Other arguments are results of all expressions from the template literal.
4. Use "Array.from(arguments)" + "slice" array helper method to create an expressions values array. 
In the first test case this array needs to be [10, 5, 15]
5. Use "reduce" array helper method in order to construct resulting string that will be returned at the end of the function.
6. In the callback function for "reduce" helper method you need to concatenate pairs (string, expression value). 
First pair in the first test case will be ("Sum of the two variables a(", "10").
*/


// CHALLENGE

/*
Create a function "meanScore" that will accept any quantity of the arguments, gather them into single 
array and return mean value of all arguments rounded to 2 decimal places.
If at least one element in the gathered array is not a number - throw following error to the console: 
"Supplied arguments must contain only numbers!"
Type of the returned value must be a "number".
HINT: In this Challenge you should use both rest and spread operators.
*/

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];


// Solution


// Method 1

// const meanScore = (...scores) => {
//   let total = scores.reduce((element, n) => {
//     return element + n
//   }, 0)

//   if (typeof total === "number") return +(total/scores.length).toFixed(2)
//   return `Type of the returned value must be a "number"`
// }



// Method 2


const meanScore = (...scores) => {
  if (scores.every(elem => typeof elem === "number")) {
    return +scores.reduce((element, n) => {
          return element + n/scores.length
        }, 0).toFixed(2)
  }else return `All types of the returned value must be a "number"`
}

console.log(meanScore(...scores1)); // 1.93

console.log(
  meanScore(...scores1, ...scores2)
); // 2.8

console.log(
  meanScore(...scores1, ...scores2, ...scores3)
); // 2.59

console.log(meanScore(...scores4)); // Supplied arguments must contain only numbers!



// CHALLENGE

/* Create a function "weatherForecast" with two parameters "city" and "weather". 
If second argument is absent, "weather" parameter should get value "Great weather!".
1. First solve this WITHOUT default function parameter.
2. Comment previous solution and solve same task WITH default function parameter.
NOTE: Carefully compare your results with test calls results
*/

// Solution

// Method 1

// const weatherForecast = (city, weather) => {
//   if (weather === undefined) return `Weather forecast for ${city}: Great weather!`
//   return `Weather forecast for ${city}: ${weather}`;
// }


// Method 2

const weatherForecast = (city, weather = `Great weather!`) => {
  return `Weather forecast for ${city}: ${weather}`;
}

console.log(weatherForecast("Dubai", "Sunny"));
// Weather forecast for Dubai: Sunny

console.log(weatherForecast("London", "Light rain"));
// Weather forecast for London: Light rain

console.log(weatherForecast("Paris"));
// Weather forecast for Paris: Great weather!

console.log(weatherForecast("Miami", ""));
// Weather forecast for Miami:

console.log(weatherForecast("Las Vegas", undefined));
// Weather forecast for Las Vegas: Great weather!


// CHALLENGE

/*
Create a function "tasksSortedByIds" with two parameters "tasks" and "tasksWithIds".
1. Before performing any actions inside of the function you need to generate unique 4-digit 
"taskId" for each task where it is missing.
2. At the beginning of the function log to the console quantity of the missing taskIds:
"Quantity of the missing taskIds is 2"
3. Function should return array of tasks sorted by "taskId". All tasks in the sorted array must have "taskId".
NOTE: Original "tasks" array should remain unchanged.
NOTE: Hints down below!
BONUS: Ensure that new unique 4-digit "taskId" is not the same as any "taskId" of the existing tasks.
*/

const tasks = [
  { title: "Meeting with John", taskId: 4621 },
  { title: "Visit gym", taskId: 6821 },
  { title: "Buy new phone" },
  { title: "Clean the room", taskId: 2721 },
  { title: "Plan a trip" }
];


// Solution



const tasksSortedByIds = (tasks) => {
  console.log(`Quantity of the missing taskIds is ${tasks.filter(task => !task.hasOwnProperty("taskId")).length}`);
  const newTasks = tasks.map(({...task}) => {
    if (!task.hasOwnProperty('taskId')){
      let newTaskId = 1000 + Math.floor(Math.random() * 9000)
      task.taskId = newTaskId
    }
    return task
  })
  return newTasks.sort((a, b) => a.taskId - b.taskId)
}



console.log(
  "Sorted array of tasks with taskIds:",
  tasksSortedByIds(tasks)
);
/* 
Quantity of the missing taskIds is 2
Sorted array of tasks with taskIds: ...
*/

console.log(
  "Original unsorted array of tasks with missing taskIds:",
  tasks
);
/*
Original unsorted array of tasks with missing taskIds: ...
*/

/* HINTS
1. Use default value for the second parameter "tasksWithIds". This default value should be a function call - 
"generateTasksIds()".
2. "generateTasksIds" function should have one parameter "tasks".
3. Use .map inside of the "generateTasksIds" to create new array of tasks and return this new array as result 
of the "generateTasksIds" function call. 
4. Inside of the callback function for .map call create first copy of the object ("task") to avoid mutation of 
the "tasks" array.
5. Generate new "taskId" using following syntax
Math.floor(1000 + Math.random() * 9000)
6. BONUS (Ensure that newly generated "taskId" doesn't match "taskId" of any of the existing tasks.
Use "do-while" loop and generate new "taskId" until it will be absent in other tasks. 
*/





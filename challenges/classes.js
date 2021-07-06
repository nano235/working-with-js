"use strict"


// converting function constructor to class

class Vehicle_1 {
    constructor(props){
        this.maxSpeed = props.maxSpeed
        this.weight = props.weight
    }

    vehicleInfo() {
        console.log(`Max speed of the vehicle is ${this.maxSpeed} and weight is ${this.weight}`);
    }
}

class Airplane_1 extends Vehicle_1 {
    constructor(props){
        super(props)
        this.wingSpan = props.wingSpan
        this.maxRangeOfFlight = props.maxRangeOfFlight
    }

    airplaneInfo(){
        console.log(`Wingspan of the airplane is ${this.wingspan} and maximal range of flight is ${this.maxRangeOfFlight}`);
    }
}

class CivilPlane_1 extends Airplane_1 {
    constructor(props){
        super(props)
        this.numberOfSeats = props.numberOfSeats
    }

    seatsInfo(){
        console.log(`Number of seats in the plane is ${this.numberOfSeats}`);
    }
}

const propsForSmallPlane_1 = {
    numberOfSeats: 4,
    wingspan: 20,
    maxRangeOfFlight: 1000,
    maxSpeed: 800,
    weight: 15
    };
    
const smallPlane_1 = new CivilPlane_1(propsForSmallPlane_1);

const propsForLargePlane_1 = {
numberOfSeats: 250,
wingspan: 60,
maxRangeOfFlight: 3500,
maxSpeed: 900,
weight: 40
};

const largePlane_1 = new CivilPlane_1(propsForLargePlane_1);

/**
 * VERIFICATION
 */
smallPlane_1.vehicleInfo(); // Max speed of the vehicle is 800 and weight is 15

largePlane_1.vehicleInfo(); // Max speed of the vehicle is 900 and weight is 40


/**
 * CHALLENGE 7-3: TASK
 *
 * Convert all function constructors to ES6 Classes keeping same functionality
 */

// function Product(props) {
//     this.price = props.price;
//   }
  
//   Product.prototype.priceInfo = function() {
//     console.log(`Price of the product is ${this.price}`);
//   };
  
//   function ElectricDevice(props) {
//     Product.call(this, props);
//     this.energyEfficiencyClass = props.energyEfficiencyClass;
//   }
  
//   ElectricDevice.prototype = Object.create(Product.prototype);
  
//   ElectricDevice.prototype.constructor = ElectricDevice;
  
//   ElectricDevice.prototype.energyInfo = function() {
//     console.log(
//       `Energy Efficiency Class is ${
//         this.energyEfficiencyClass
//       }`
//     );
//   };
  
//   function TV(props) {
//     ElectricDevice.call(this, props);
//     this.model = props.model;
//     this.diagonal = props.diagonal;
//   }
  
//   TV.prototype = Object.create(ElectricDevice.prototype);
  
//   TV.prototype.constructor = TV;
  
//   const propsForMyTv = {
//     model: "A1620",
//     price: 1200,
//     energyEfficiencyClass: "A+",
//     diagonal: 42
//   };
  
//   const myTV = new TV(propsForMyTv);
  
//   /**
//    * VERIFICATION
//    */
//   console.log(myTV);
//   /* {
//     model: "A1620",
//     price: 1200,
//     energyEfficiencyClass: "A+",
//     diagonal: 42,
//     __proto__: ...
//   } */
  
//   myTV.energyInfo(); // "Energy Efficiency Class is A+"
  
//   myTV.priceInfo(); // Price of the product is 1200
  
//   myTV instanceof TV; // true
//   myTV instanceof ElectricDevice; // true
//   myTV instanceof Product; // true
//   myTV instanceof Object; // true


// Solution

// Adding "_1" to each class and instances to avoid error of "already declared"

class Product_1 {
    constructor(props){
        this.price = props.price;
    }

    priceInfo(){
        console.log(`Price of the product is ${this.price}`);
      };
}

class ElectricDevice_1 extends Product_1 {
    constructor(props){
        super(props)
        this.energyEfficiencyClass = props.energyEfficiencyClass;
    }

    energyInfo(){
        console.log(`Energy Efficiency Class is ${this.energyEfficiencyClass}`);
      };
}

class TV_1 extends ElectricDevice_1 {
    constructor(props){
        super(props)
        this.model = props.model;
        this.diagonal = props.diagonal;
    }
}

const propsForMyTv_1 = {
    model: "A1620",
    price: 1200,
    energyEfficiencyClass: "A+",
    diagonal: 42
  };
  
  const myTV_1 = new TV_1(propsForMyTv_1);
  
  /**
   * VERIFICATION
   */
  console.log(myTV_1);
  /* {
    model: "A1620",
    price: 1200,
    energyEfficiencyClass: "A+",
    diagonal: 42,
    __proto__: ...
  } */
  
  myTV_1.energyInfo(); // "Energy Efficiency Class is A+"
  
  myTV_1.priceInfo(); // Price of the product is 1200


  /**
 * CHALLENGE 7-4: TASK
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */


//  Solution

class ExtendedArray extends Array {
    sum(){
        return this.reduce((sum, el) => sum + el)
    }

    onlyNumbers(){
        return this.filter(el => typeof el === "number")
    }
}


const newArray_1 = new ExtendedArray(1,2,3,4,5,6,7,8,9)

console.log(newArray_1.sum())
console.log(newArray_1.onlyNumbers())


/**
 * CHALLENGE 7-5: TASK
 *
 * Create new class "CustomArray" that should extend built-in "Array".
 *
 * Add one custom method "customPush" to the new class.
 * This method will have one parameter "newElement".
 *
 * It should perform following actions:
 * 1. Add new element to the existing array
 * (don't use "push" method for this)
 * 2. Modify "length" property of the array (increment it)
 * 3. Log following line to the console:
 * "New element <ELEMENT> was just added to the array"
 *
 * Create instance of the new "CustomArray" class and test new method "customPush" and compare it with "push"
 *
 * What will happen if name of the custom method in the "CustomArray" class will be also "push" instead of "customPush"?
 * Try this.
 */

//  Solution


class CustomArray extends Array {
    customPush(newElement){
        this[this.length] = newElement
        return `New element ${newElement} was just added to the array`
    }
}

const newArray_2 = new CustomArray()


newArray_2.customPush(1)







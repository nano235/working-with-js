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




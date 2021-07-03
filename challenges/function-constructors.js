function Animal(props){
    this.name = props.name
    console.log(name);
    
  }
  
  const propsForAnimalName = {
    name: "Goat"
  }
  
  const animalName = new Animal(propsForAnimalName)
  
  
  const Parent = {
    type: "parent",
    typeInfo(){
      console.log(`Hello from ${this.type}`);
    },
    modify(prop){
      this.type = prop
    }
  }
  
  Parent.typeInfo()
  
  const child = Object.create(Parent)
  
  child.modify("child")
  
  child.typeInfo()
  
  const grandChild = Object.create(Parent)
  
  grandChild.modify("grandChild")
  
  grandChild.typeInfo()
  
  
  // PROTOTYPE
  
  function Airplane (props) {
    this.wingSpan = props.wingSpan
    this.maxRangeOfFlight = props.maxRangeOfFlight
  }
  
  Airplane.prototype.airplaneInfo = function(){
    console.log(`Wingspan of the airplane is ${this.wingSpan} and max range of flight is ${this.maxRangeOfFlight}`);
  }
  
  function CivilPlane (props) {
    Airplane.call(this, props)
    this.numberOfSeats = props.numberOfSeats
  }
  
  CivilPlane.prototype = Object.create(Airplane.prototype)
  CivilPlane.prototype.constructor = CivilPlane
  
  const propsForSmallPlane = {
    wingSpan: 30,
    maxRangeOfFlight: 1000,
    numberOfSeats: 50
  }
  
  const smallPlane = new CivilPlane(propsForSmallPlane)
  
  const propsForLargePlane = {
    wingSpan: 100,
    maxRangeOfFlight: 3000,
    numberOfSeats: 500
  }
  
  const largePlane = new CivilPlane(propsForLargePlane)
  
  
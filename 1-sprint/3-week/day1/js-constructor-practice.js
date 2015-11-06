/*
Create JavaScript constructor functions for the following:
Person
Car
House
Computer
Attach at least 1 method and 2 properties for each
*/

function Person(fName, lName, age) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  }
}

function Car(type, color, speed) {
  this.type = type;
  this.color = color;
  this.maxSpeed = speed;
  this.go = function() {
    console.log("VROOM VROOM!! going max speed at " + this.maxSpeed + " miles per hour!");
  }
}

function House(rooms, baths, sqft) {
  this.rooms = rooms;
  this.baths = baths;
  this.squareFoot = sqft;
  this.report = function() {
    console.log("You are looking at a house with " + this.rooms + " rooms and " + this.baths + " baths. The total square footage is: " + this.squareFoot);
  }
}

function Computer(make, model, mac) {
  this.make = make;
  this.model = model;
  this.macAddress = mac;
  this.getMac = function() {
    return this.macAddress;
  }
}

/* tests */
var newHouse = new House(4, 3, 2000);
console.log(newHouse);
newHouse.report();

var comp = new Computer('Apple', 'Macbook Pro', 483483948339);
console.log(comp.getMac());

var person1 = new Person('David', 'Adams', 27);
console.log(person1.getFullName());

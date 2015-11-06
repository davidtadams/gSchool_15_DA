// var Dog = {
//   legs: 4,
//   name: 'Fido',
//   bark: function () {
//     console.log('woof!');
//   }
// }
//
// Dog.bark();
//
// var Dog2 = {
//   legs: 4,
//   name: 'Lil Bow Wow',
//   bark: function () {
//     console.log('Arf!');
//   }
// }
//
// Dog2.bark();


function Dog(name, bark, legs) {
  this.legs = legs || 4;
  this.name = name;
  this.getLegs = function () {
    return this.legs;
  }
  this.setLegs = function (numLegs) {
    if (typeof numLegs == 'number') {
      this.legs = numLegs;
    }
    else {
      consol.log("Legs must be a number");
    }
  }
  this.bark = function () {
    console.log(bark);
  }
}

// var dog = new Dog('Fido', 'woof!');
// console.log(dog);
// dog.Bark();
//
// var dog2 = new Dog('Fefe', 'Le bow!');
// dog2.Bark();

// EXERCISE
function Person(firstName, lastName) {
  this.setFirstName = function (firstName) {
    if (typeof firstName == 'string' && firstName.length < 50) {
      this.firstName = firstName;
    }
    else {
      console.log("First name is invalid.")
    }
  }

  this.setLastName = function (lastName) {
    if (typeof lastName == 'string' && lastName.length < 50) {
      this.lastName = lastName;
    }
    else {
      console.log("Last name is invalid.")
    }
  }

  this.setFirstName(firstName);
  this.setLastName(lastName);

  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  }
}

var per = new Person('David', 'Adams');
console.log(per);
console.log(per.getFullName());
var per2 = new Person('David', 2);
var per3 = new Person(3, 'Adams');

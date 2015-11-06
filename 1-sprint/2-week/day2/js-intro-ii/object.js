var person = {
  firstName: "Bruce",
  lastName: "Wayne",
  1: "david"
};

console.log(person[1]);
console.log(person['1']);

var person = [];
console.log(person instanceof Array) // true
console.log(person instanceof Object) // true
console.log(Array.isArray(person)) //true

var person = {}
console.log(person instanceof Array) // false
console.log(person instanceof Object) // true

var person = {
  name: "Danny"
}

//shallow copy vs deep copy
//var anotherPerson = person;
var anotherPerson = JSON.parse(JSON.stringify(person));

person.name = "fred";
console.log(anotherPerson.name);

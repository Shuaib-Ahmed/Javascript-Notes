// var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Initialize a variable
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// Rules for naming variable
//  letters, numbers, _, $
// Can not start with number

// Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname;

// LET
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);


// CONST
const name = 'John';
console.log(name);
// Can not reassign
name = 'Sara';
// Have to assign a value if we use const
// const greeting this dosenot work;

const person = {
  name: 'John',
  age: 30
}
// we can to this 
person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
// can do this
numbers.push(6);
// cannot do this
// numbers = [0,1,2];

console.log(numbers);
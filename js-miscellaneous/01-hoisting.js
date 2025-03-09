// variable hoisting
// let and const are not hoisted
// var hoisted

console.log(x); // ReferenceError: Cannot access 'x' before initialization

const x = 10;


console.log(y);

var y = 5;

/*
var y; // undefined

console.log(y); // undefined

y = 5;

*/



// function hoisting
sayHi();
sayHi();

function sayHi() {
  console.log('Hi');
}


// Hoisting can happen in a block or function body as well 

function startProcess() {
  console.log(smth); // ReferenceError: Cannot access 'smth' before initialization

  let smth = 10;
}

if(true) {
  console.log(name); // ReferenceError: Cannot access 'name' before initialization
  let name = 'Alex';
}
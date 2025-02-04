// variable hoisting
// let and const are not hoisted
// var hoisted

console.log(x); // ReferenceError: Cannot access 'x' before initialization

const x = 10;


console.log(y);

var y = 5;



// function hoisting
sayHi();
sayHi();

const sayHi = () => {
  console.log('Hi');
}


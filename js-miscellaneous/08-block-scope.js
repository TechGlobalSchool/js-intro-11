// Before ES6 - there was only var 

if(true) {
  var name = 'John';
}

console.log(name); // John


// After ES6 - let and const added
if(true) {
  const num = 10;
}

console.log(num); // ReferenceError: num is not defined

// if-else, switch, loop


{
  var num1 = 1;
  let num2 = 2;
  const num3 = 3;
}

console.log(num1); // 1
console.log(num2); // ReferenceError: num2 is not defined
console.log(num3); // ReferenceError: num3 is not defined
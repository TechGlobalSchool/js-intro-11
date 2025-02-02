// function declaration
function printHi() {
  console.log('Hi');
}

printHi();
printHi();


// Function declaration
function runMyDaily() {
  console.log('Prepare coffee');
  console.log('Take a shower');
  console.log('Drink coffee');
  console.log('Head to school');
} 

runMyDaily();
runMyDaily();
runMyDaily();


// Function declaration with an argument
function hiName(name) {
  console.log(`Hi ${name}!`);
}

hiName('John');
hiName('Adam');


// Function declaration with 2 arguments
// Take 2 args called as greet, name 
// function name greetName 
// greetName('Hello', 'John') -> print 'Hello, John!'
// greetName('Good morning', 'Jane') -> print 'Good morning, Jane!'

function greetName(greet, name) {
  console.log(`${greet}, ${name}!`);
}

greetName('Good evening', 'Max');
greetName('Hi', 'Stefan');
greetName('Bye', 'Mariia');




function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiply(2, 5));


/*
Create a function called as average
This function takes 2 parameters called as num1, num2 
And it returns the average of these arguments
*/

function average(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(average(3, 5));
console.log(average(0, 0));
console.log(average(-1, -3));
console.log(average(5, -3));
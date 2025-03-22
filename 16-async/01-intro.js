// synchronous code
console.log('1');
console.log('2');
console.log('3');

// asynchronous code 
/*
Expected:
  A
  B
  C

  Actual:
  B
  C
  A
*/

setTimeout(() => {
  console.log('A');
}, 1000);

setTimeout(() => {
  console.log('B');
}, 500);

setTimeout(() => {
  console.log('C');
}, 750);
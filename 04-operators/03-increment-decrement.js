let age = 25;

//2026
++age;

//2027
++age;

console.log(age);



let quantity = 10;

quantity--;
--quantity;

console.log(quantity);


// Difference between post and pre increment/decrement 11-11
let i = 10;

let j = i++; // increase i by one but not at this moment

console.log(`I value is ${i} and J value is ${j}`);

let count = 25;
count++; // increase it by one but at this line still use old value
console.log(count); // 26


let divisor = 4;

console.log(9 / --divisor); // 3


let counter = 5;

let result = counter++; // counter = 5, result = 5

console.log(++counter * result); // result = 5, counter = 7

// post-increment or post-decrement var++ or var--
// We'll use this with LOOPS
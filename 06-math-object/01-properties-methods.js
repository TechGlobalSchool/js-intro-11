// Properties
let pi = Math.PI;

console.log(pi);

// Methods 
console.log(Math.abs(5));
console.log(Math.abs(-5));

let a1 = Math.abs(3 - 5) - 3;
console.log(a1); // -1

let a2 = Math.abs(Math.abs(2 * 5 - 3) - 15);
console.log(a2); // 8

let userAge1 = 15;
let userAge2 = 20;

console.log(`The age difference is ${Math.abs(userAge2 - userAge1)}`);


// ceil(), floor(), trunc(), round() methods
console.log(Math.trunc(10.99)); // 10
console.log(Math.trunc(10.01)); // 10

console.log(Math.round(10.99)); // 11
console.log(Math.round(10.01)); // 10
console.log(Math.round(10.49)); // 10
console.log(Math.round(10.50)); // 11
console.log(Math.round(10.51)); // 11

console.log(Math.round(3.4923)); // 3
console.log(Math.round(3.4957)); // 3

console.log(Math.ceil(10.01)); // 11
console.log(Math.ceil(10.99)); // 11

console.log(Math.floor(10.01)); // 10
console.log(Math.floor(10.99)); // 10


// pow() method
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25

// sqrt() method
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(5).toFixed(1)); // 2.2

// max(), min() methods
console.log(Math.max(5)); // 5
console.log(Math.max(5, 3)); // 5
console.log(Math.max(5, 3, 10)); // 10

console.log(Math.max(3.119, 3.1191)); // 3.1191

console.log(Math.min(5)); // 5
console.log(Math.min(5, 3)); // 3
console.log(Math.min(5, 3, 10)); // 3
console.log(Math.min(3.119, 3.1191)); // 3.119


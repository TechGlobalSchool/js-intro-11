let num = 20;

console.log(typeof num); // number
console.log(isNaN(num)); // false

console.log(20 * 'Hi'); // NaN

console.log(typeof NaN); // number

console.log(isNaN(NaN)); // true
console.log(isNaN(5)); // false
console.log(isNaN('Hi')); // true

console.log(1 + NaN); // NaN
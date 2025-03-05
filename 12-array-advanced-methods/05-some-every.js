const numbers = [ 1, 2, -1, 4, 0 ];

// check if all numbers in the array are positive 

// let flag = true; // I assume all the numbers are positive 

// for(const num of numbers) {
//   if(num <= 0) {
//     flag = false;
//     break;
//   }
// }

// console.log(flag); // true

let allPos = numbers.every((x) => x > 0);

console.log(allPos);


const cities = [ 'Chicago', 'Berlin', 'Rome' ];

// Check if any city has 10 letters -> false 
let some6 = cities.some((x) => x.length === 10);

console.log(some6);
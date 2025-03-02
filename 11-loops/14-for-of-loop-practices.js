const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

console.log('\n--------TASK-1--------\n');
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

let sum = 0;

for(const num of numbers) {
  sum += num;
}

console.log(sum);
console.log(sum / numbers.length);

// Find the product of all the numbers starting from the index 3 -> 3 * 2 * 2 * 7 -> 84
console.log('\n--------TASK-2--------\n');

let product = 1;

for(const num of numbers.slice(3)) {  // numbers.slice(3); // [ 3, 2, 2, 7]
  product *= num;
}

console.log(product); // 84
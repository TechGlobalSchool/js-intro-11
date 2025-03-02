const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

console.log('\n--------TASK-1--------\n');
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19
let sumForEvenIndex = 0;

for(let i = 0; i < numbers.length; i += 2) { // i = 0, 2, 4, 6
  sumForEvenIndex += numbers[i];
}

console.log(sumForEvenIndex);


// Find the product of numbers that has odd index -> 4 * 3 * 2 -> 24
console.log('\n--------TASK-2--------\n');
let productOfOddIndex = 1;

for(let i = 1; i < numbers.length; i += 2) {
  productOfOddIndex *= numbers[i];
}

console.log(productOfOddIndex);
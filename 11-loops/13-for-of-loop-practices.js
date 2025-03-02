const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// Count how many positive numbers you have in the array -> 4
console.log(`\n------TASK01-------\n`);

let countPos = 0;

for(const num of numbers) {
  if(num > 0) countPos++;
}

console.log(countPos);

// Count how many negative numbers you have in the array -> 3
console.log(`\n------TASK02-------\n`);
let countNeg = 0;

for(const num of numbers) {
  if(num < 0) countNeg++;
}

console.log(countNeg);

// Count how many even numbers you have in the array -> 7
console.log(`\n------TASK03-------\n`);
let countE = 0;

for(const num of numbers) {
  if(num % 2 === 0) {
    countE++;
  }
}

console.log(countE);

// Count how many positive-odd numbers you have in the array -> 2
console.log(`\n------TASK04-------\n`);

let countPosOdd = 0;

for(const num of numbers) {
  if(num > 0 && num % 2 !== 0) {
    countPosOdd++;
  }
}

console.log(countPosOdd);

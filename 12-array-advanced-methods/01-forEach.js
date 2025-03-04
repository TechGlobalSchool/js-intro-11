const numbers = [ 5, 7, 1, 3, 10 ];

// for loop
// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for...of loop
// for(const number of numbers) {
//   console.log(number);
// }

// forEach() method
numbers.forEach((x) => console.log(x * 2));

const names = [ 'Mariia', 'Alex', 'John', 'Jane', 'Victoria'];

// Print all the names that has 4 characters - filter() method is better choice for this task
names.forEach((name) => {
  if(name.length === 4) console.log(name);
});


const nums = [ 5, 3, 2, 1 ];

// Find sum of numbers: 11        -> preferred way is reduce() 
// Find product of numbers: 30    -> preferred way is reduce()
// Create a new array which has all numbers multiplied by 5: [ 25, 15, 10, 5 ]  -> preferred way is map()

let sum = 0;
let product = 1;
const arr5 = [];

nums.forEach((num) => {
  sum += num;
  product *= num;
  arr5.push(num * 5);
});

console.log(sum);
console.log(product);
console.log(arr5);
Math.random(); // returns a number between 0 (inclusive) and 1 (exclusive)

// Generate a random number between 3 and 5 (both inclusive)
// 3, 4, 5

let result = Math.floor(Math.random() * 3) + 3;
console.log(result);

/*
Find a random number betwee a and b (both inclusive)
1. Calculate how many numbers you have in the range
count = biggerNumber - smallerNumber + 1

2. Multiply the count you found with Math.random()
result = Math.random() * count

3. Floor the result using Math.floor() method
newResult = Math.floor(result)

4. Add your smaller number to new result
finalResult = newResult + smallerNumber;

let result = Math.floor(Math.random() * (max - min + 1)) + min;
let result = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
let result = Math.round(Math.random() * (max - min)) + min;
*/

// Generate random number between 6 and 10 both inclusive
let r1 = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
console.log(r1);


let num1 = 4;
let num2 = 2;

// Generate a random number between num1 and num2 both inclusive
let max = Math.max(num1, num2);
let min = Math.min(num1, num2);

let r2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(r2);


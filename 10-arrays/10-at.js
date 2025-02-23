const arr = ['Mouse', 'Laptop', 'Keyboard', 'Camera'];

// First and last elements in the array
arr[0];
arr[arr.length - 1]; // arr.at(-1)

// Second and the second from the last
arr[1];
arr[arr.length - 2]; // arr.at(-2)

// Find the average of first and last element in the below array
const numbers = [5, 7, 12, 15];
let first = numbers[0];
let last = numbers.at(-1);
let sum = first + last;

console.log(sum / 2);

/*
TASK: used to retrieve element at specified index
ARGUMENTS: it takes a number as an index
  NOTE: it works with negative indexes as well (backward)
RETURN: returns an element found at the specified index
  NOTE: if there is no element at the specified index, it returns undefined
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY: No
*/

// [index] access vs at(index)
console.log([1, 2, 3].at(1)); // 2
console.log([1, 2, 3][1]); // 2

console.log([1, 2, 3].at(-1)); // 3
console.log([1, 2, 3][-1]); // undefined

console.log([1, 2, 3].at(5)); // undefined
console.log([1, 2, 3].at(-5)); // undefined
console.log([1, 2, 3][5]); // undefined
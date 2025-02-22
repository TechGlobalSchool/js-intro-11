const arr1 = [1, 2, 3];
const arr2 = [6, 7, 8];
const arr3 = [4, 5, 6];

const newArr1 = arr1.concat(arr2); // [1, 2, 3, 6, 7, 8]

const newArr2 = arr1.concat(arr3, arr2); // [1, 2, 3, 4, 5, 6, 6, 7, 8]

console.log(newArr1);
console.log(newArr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);

/*
TASK: merges multiple arrays together
ARGUMENTS: one or more arrays/elements 
RETURN: returns a new array 
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: No
*/

console.log([1, 5, 10].concat(100, 35)); // [ 1, 5, 10, 100, 35 ]
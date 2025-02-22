const animals = ['Lion', 'Bird', 'Tiger'];

console.log(animals.push('Rabbit')); // 4
let newSize = animals.push('Monkey', 'Fish');

console.log(newSize); // 6

console.log(animals);

/*
TASK: add one or more elements to the tail (end) of the array
ARGUMENTS: one or more elements
RETURN: it returns the new length of the array
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY: Yes
*/


const numbers = [5, 10, 100, 7, 20];

console.log(numbers.pop()); // 20
numbers.pop(); // 7

console.log(numbers);

/*
TASK: removes the last element in the array
ARGUMENTS: no args
RETURN: returns the removed element
  NOTE: if the array is empty, then it returns undefined
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: Yes 
*/

console.log([].pop()); // undefined
const objects = ['Remote', 'Watch', 'Pen', 'PC', 'Mouse'];

const partial1 = objects.slice(0, 2); // ['Remote', 'Watch']
const partial2 = objects.slice(1, 4); // ['Watch', 'Pen', 'PC']
const partial3 = objects.slice(2); // ['Pen', 'PC', 'Mouse']

console.log(partial1, partial2, partial3);
console.log(objects); // ['Remote', 'Watch', 'Pen', 'PC', 'Mouse']

console.log(objects.slice(-2)); // [ 'PC', 'Mouse' ]
console.log(objects.slice(-5, -3)); // [ 'Remote', 'Watch' ]

// Tricky point
console.log(objects.slice(-4, -5)); // [ ]
console.log(objects.slice(1, 0)); // [ ]

/*
TASK: retrieve partial arrays using indexes
ARGUMENTS: takes one or more index (start index inclusive, end index exclusive)
RETURN: returns a new array
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: No
*/

console.log([1, 2, 3, 10, 50].slice(undefined, 3)); // [ 1, 2, 3 ]
console.log([1, 2, 3, 10, 50].slice(-Infinity, Infinity)); // [ 1, 2, 3, 10, 50 ]



// splice() -> it can do everything we did with pop(), push(), shift(), unshift()
const names = ['John', 'Jane', 'Alex', 'Max', 'Mariia'];

//console.log(names.splice(0, 1)); // [ 'John' ]
//names.splice(0, 3); // this will remove first 3 elements

//console.log(names.splice(2, 0, 'Adam')); // []

// Remove 'Jane', 'Alex' and add 'Adam', 'Omar' instead
names.splice(1, 2, 'Adam', 'Omar', 'Alina');

console.log(names);

/*
splice() method 
TASK: used to add or remove elements anywhere within the array 
RETURN: returns the removed elements as an array 
ARGUMENTS: 2 or more arguments 
    1st argument is the start position-index 
    2nd arguement is the number of elements you want to remove including the start position-index 
    3rd... are the new elements to be added after the start position-index 
STATIC or INSTANCE: Instance
CHANGE ORIGINAL VALUE: YES
*/
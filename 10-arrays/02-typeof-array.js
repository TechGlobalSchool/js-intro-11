// *** Interview Question 
// How do check if a variable is array?

const arr = [];

console.log(typeof arr); // object

// Array.isArray()
/*
TASK: checks if a variable is an instance of Array or not
ARGUMENTS: Yes, one variable to check
RETURN: returns a boolen. true if the variable is an Array instance, false otherwise.
STATIC or INSTANCE: Static
DOES IT MODIFY ORIGINAL ARRAY: No
*/

console.log(Array.isArray(arr)); // true
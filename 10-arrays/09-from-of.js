let name = 'John';

const nameChars1 = name.split('');
const nameChars2 = Array.from(name);

console.log(nameChars1);
console.log(nameChars2);
console.log(name);

/*
TASK: creates a new array from iterable object
ARGUMENTS: it takes an iterable object
RETURN: a new array
STATIC or INSTANCE: Static
DOES IT MODIFY ORIGINAL ITERABLE OBJECT: No
*/

const arr1 = [1, 2, 3];
const arr2 = new Array('Berlin', 'Oslo', 'Toronto');
const arr3 = Array.of('John', 'Jane', 'Alex');
const arr4 = Array.of(name, null, 5, 10.99);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log(Array.isArray(arr1));
console.log(Array.isArray(arr2));
console.log(Array.isArray(arr3));

/*
TASK: creates a new array with the given items/elements
ARGUMENTS: items/elements
RETURN: a new array
STATIC or INSTANCE: Static
DOES IT MODIFY ORIGINAL ITEMS: No
*/

const objects = ['Laptop', 'Remote', 'Pen', 'Camera'];

objects.unshift('Mouse'); // 5
objects.unshift('Pencil', 'Eraser', 'Adapter'); // 8

console.log(objects);

/*
TASK: adds one or more elements to start of the array
ARGUMENTS: one or more elements
RETURN: new length of the array
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: Yes
*/

objects.shift(); // 'Pencil'
objects.shift(); // 'Eraser'

console.log(objects);

console.log([].shift()); // undefined

/*
TASK: removes the last element from the start of the array
ARGUMENTS: no args
RETURN: returns removed element
  NOTE: if the array is empty, then it returns undefined
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: Yes
*/
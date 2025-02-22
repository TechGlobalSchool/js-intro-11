const students = [ 'John', 'Alex', 'Jessie', 'Jane', 'Omar', 'Omar' ];

let b1 = students.includes('John'); // true
students.includes('John', 1); // false
students.includes('Omar'); // true
students.includes('Max'); // false
students.includes('jane'); // false


console.log(b1);

/*
TASK: checks if the array has the specified element
ARGUMENTS: takes element as an argument 
  NOTE: it can take a second argument which is the start index of search
RETURN: it returns true if the element exists in the array, false otherwise
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: No
*/

students.indexOf('Jane'); // 3
students.lastIndexOf('Jane'); // 3

students.indexOf('Omar'); // 4
students.lastIndexOf('Omar'); // 5

students.indexOf('Heidi'); // -1
students.lastIndexOf('Heidi'); // -1

/*
indexOf() 
TASK: checks if the array has the specified element and returns the index of first matching element
ARGUMENTS: takes element as an argument 
  NOTE: it can take a second argument which is the start index of search
RETURN: it returns a valid first index if the element exists in the array, -1 otherwise
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: No

lastIndexOf() 
TASK: checks if the array has the specified element and returns the index of last matching element
ARGUMENTS: takes element as an argument 
  NOTE: it can take a second argument which is the start index of search
RETURN: it returns a valid last index if the element exists in the array, -1 otherwise
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: No
*/
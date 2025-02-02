let company = 'TechGlobal';

// Get char using property access 
console.log(company[0]); // 'T' 
console.log(company[8]); // 'a'


// Get first and last chars 
let greeting = 'Good morning';

let firstChar = greeting[0];
let lastChar = greeting[greeting.length - 1];

console.log(firstChar);
console.log(lastChar);



// charAt()
let city = 'Chicago';

console.log(city.charAt(2)); // 'i' 
console.log(city.charAt(city.length - 1)); // 'o'

console.log(city);


// at()
let color = 'Purple'; 
console.log(color.at(0)); // 'P'
console.log(color.at(color.length - 1)); // 'e'


// EDGE CASES
let name = 'Max';
console.log(name[-1]); // undefined
console.log(name[3]);  // undefined

console.log(name.charAt(-1)); // ''
console.log(name.charAt(3));  // ''

console.log(name.at(-1)); // 'x'
console.log(name.at(3));  // undefined

console.log(name.at(-1));
console.log(name.at(-2));
console.log(name.at(-3));
console.log(name.at(-4));


// Get first and last chars in a string 
let brand = 'Apple';
let fChar = brand[0];
let lChar = brand.at(-1);

/*
charAt()
TASK: used to retrieve a char from string at specified index
ARGUMENTS: yes, it takes an index
RETURN: returns a char as a string  
  NOTE: if the index is not valid for the string, it returns undefined
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
at()
TASK: used to retrieve a char from string at specified index
  NOTE: index could be negative as well (counting backward)
ARGUMENTS: yes, it takes an index
RETURN: returns a char as a string  
  NOTE: if the index is not valid for the string, it returns empty string
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/


let str = 'abcde';
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));
console.log(str.charCodeAt(10)); // NaN

console.log('Hi'.at(3));
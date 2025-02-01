// startsWith() vs endsWith()

let company = 'TechGlobal';

console.log(company.startsWith('T')); // true
console.log(company.startsWith('Tech')); // true
console.log(company.startsWith('TechGlobal')); // true

console.log(company.startsWith('t')); // false
console.log(company.toLowerCase().startsWith('t')); // true

console.log(company.endsWith('l')); // true
console.log(company.endsWith('Global')); // true
console.log(company.endsWith('TechGlobal')); // true

console.log(company.startsWith('') && company.endsWith('')); // true

console.log(company.toUpperCase().startsWith('TECH') && company.toLowerCase().endsWith('l')); // true

/*
startsWith() method
TASK: used to check if string starts with another substring
ARGUMENTS: yes, it takes a string to check 
RETURN: returns a boolean (true if string starts with substring or false otherwise) 
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
endsWith() method
TASK: used to check if string ends with another substring
ARGUMENTS: yes, it takes a string to check 
RETURN: returns a boolean (true if string ends with substring or false otherwise) 
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/


// includes() method
let quote = `Let's do it`;

console.log(quote.includes('')); // true
console.log(quote.includes(' ')); // true
console.log(quote.includes('do')); // true

console.log(quote.includes('let')); // false
console.log(quote.includes('it ')); // false

/*
includes() method
TASK: checks if the string contains another substring
ARGUMENTS: it takes another substring to check 
RETURN: returns a boolean (true if string contains the substring or false otherwise) 
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/


let address = '123 Street Chicago IL 12345';

console.log(address.includes('Chicago')); // true
console.log(address.includes('Chicago', 20)); // false

console.log(address.startsWith('123')); // true
console.log(address.startsWith('123', 1)); // false


// search() 
let str = 'abcdea';

console.log(str.search('a')); // 0
console.log(str.search('d')); // 3
console.log(str.search('x')); // -1

console.log(str.search('bc')); // 1
console.log(str.search('bcde')); // 1
console.log(str.search('abcde')); // 0

console.log(str.search('bcda')); // -1
console.log(str.search(' ')); // -1
console.log(str.search('')); // 0
console.log(str.search('a')); // 0


// indexOf() and lastIndexOf() methods
let today = 'saturday';

console.log(today.indexOf('a')); // 1
console.log(today.lastIndexOf('a')); // 6


console.log(today.lastIndexOf('123')); // -1
console.log(today.indexOf('123')); // -1

console.log(today.indexOf('r')); // 4
console.log(today.lastIndexOf('r')); // 4

// if there is only one match of the searched string, then indexOf() and 
// lastIndexOf() will always return the same index




let myAddress = '123 Street Chicago';

// Make sure the address has Street keyword
console.log(myAddress.indexOf('Street') !== -1); // true
console.log(myAddress.indexOf('12345') !== -1); // false


/*
indexOf()
TASK: check if the original string has a substring
ARGUMENTS: Yes, a substring
RETURN: returns the first found index of the matching substring within original string
  NOTE: if it cannot found the substring, then it returns -1
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
lastIndexOf()
TASK: check if the original string has a substring
ARGUMENTS: Yes, a substring
RETURN: returns the last found index of the matching substring within original string
  NOTE: if it cannot found the substring, then it returns -1
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

console.log('can i can a can'.indexOf('can')); // 0
console.log('can i can a can'.lastIndexOf('can')); // 12
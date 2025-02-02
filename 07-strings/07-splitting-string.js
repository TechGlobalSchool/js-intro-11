let str1 = 'Today is Sunday';

const words = str1.split(' ');

console.log(words); // [ 'Today', 'is', 'Sunday' ]

console.log(words[0]); // 'Today'

console.log(words[2].slice(0, 3)); // 'Sun'


let str2 = '+90 (312) 000 0000';

console.log(str2.split(' ')); // [ '+1', '(312)', '000', '0000' ]
console.log(str2.split(' ').length); // 4

console.log(str2.split(' ')[0] === '+1'); // true


let str3 = 'C:\\Users\\techglobal\\Desktop\\MyFolder';
console.log(str3.split('\\'));

let str4 = 'One word or two';
console.log(str4.split('word')); // [ 'One ', ' or two' ]

let str5 = 'Apple';
console.log(str5.split('')); // [ 'A', 'p', 'p', 'l', 'e' ]

let countWords = 'I am at school and teaching JS String split method today!'.split(' ').length;
console.log(countWords); // 11


const actualDate = '2025-02-14';
const appDate = actualDate.split('-');
console.log(appDate);

let expectedDate = `${appDate[1]}/${appDate[2]}/${appDate[0]}`;
console.log(expectedDate);

console.log(expectedDate === '02/14/2025');

/*
TASK: split the string with the given separator
ARGUMENTS: Yes, a string or regex separator
RETURN: returns an Array of your splitted substrings  
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/


// EDGE Case 
let str6 = 'Hello';

console.log(str6.split('.')); // [ 'Hello' ]
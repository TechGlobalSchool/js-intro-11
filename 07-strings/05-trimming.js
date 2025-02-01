let city = ' Chicago ';

console.log(city.length); // 9
console.log(city.trimStart().length); // 8
console.log(city.trimEnd().length); // 8
console.log(city.trim().length); // 7

/*
trim()
TASK: remove extra whitespaces before and after your string
ARGUMENTS: No args
RETURN: returns a new string  
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

let str = '   Hello ';
let strTrimmed = str.trim();

console.log(str);
console.log(str.length);
console.log(strTrimmed);
console.log(strTrimmed.length);

let greet = '   Good Morning Dear!   '; 
console.log(greet.trim()); //
let str = '123 Street 123';

let strReplaced = str.replace('123', '###');
let strReplacedAll = str.replaceAll('123', '###');

console.log(str);
console.log(strReplaced);
console.log(strReplacedAll);


/*
replace() method
TASK: replaces the first found occurrence of searchString with another string
ARGUMENTS: 2 args, searchString, newValue
RETURN: returns a new string with replacement applied  
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

/*
replaceA;;() method
TASK: replaces all the found occurrences of searchString with another string
ARGUMENTS: 2 args, searchString, newValue
RETURN: returns a new string with replacement applied  
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

// EDGE
let str1 = 'Today is Sunday';
console.log(str1.replace('Saturday', 'Monday'));

console.log(str1.replaceAll('day', 'XXX'));

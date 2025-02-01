let school = 'TechGlobal School';

let s1 = school.slice(0, 4); // 'Tech'
let s2 = school.slice(4, 10); // 'Global'
let s3 = school.slice(0, 10); // 'TechGlobal'
let s4 = school.slice(11); // 'School'

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

console.log(school.slice(4)); // 'Global School'

let city = 'Los Angeles';
console.log(city.substring(0, 3));
console.log(city.substring(4));

console.log('Apple'.slice(2, 10)); // 'ple'
console.log('Apple'.substring(2, 10)); // 'ple'
console.log('Orange'.slice(-10, 10)); // 'Orange'
console.log('Orange'.substring(-10, 10)); // 'Orange'

console.log('Banana'.slice(1, -1)); // 'anan'
console.log('Banana'.slice(1, -2)); // 'ana'
console.log('Banana'.slice(0, -5)); // 'B'
console.log('Banana'.slice(0, -6)); // ''
console.log('Banana'.slice(0, 0)); // ''

console.log('Banana'.substring(1, 0)); // 'B'
console.log('Banana'.substring(0, 0)); // ''
console.log('Banana'.substring(3, 0)); // 'Ban'
console.log('Banana'.slice(3, 0)); // ''

console.log('Miami'.substring(2, 0));

/*
slice()
TASK: used to extract substrings from a string
ARGUMENTS: takes one or two index arguments
RETURN: returns a substring including startIndex, excluding endIndex 
  NOTE: it also allows negative indexes, and count backward in this case
DOES IT CHANGE ORIGINAL VALUE: No
STATIC or INSTANCE: Instance
*/

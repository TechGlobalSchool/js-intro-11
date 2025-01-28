/*
FALSY VALUES: 0, '', undefined, null, NaN, false

let result = value1 || value2;
if value1 is falsy, then the result is always value2
if value1 is truthy, then the result is always value1

let result = value1 ?? value2;
if value1 is undefined or null, then the result is always value2
if value1 is not undefined/null, then the result is always value1
*/

let nameInServer = null;

nameInServer = nameInServer ?? 'customer';

console.log(`Dear ${nameInServer}`);

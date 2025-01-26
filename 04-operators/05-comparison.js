let v1 = 3;
let v2 = '3';
let v3 = 5;
let v4 = '5';

console.log(v1 < v3); // true
console.log(v1 <= v3); // true

console.log(v1 == v3); // false
console.log(v1 === v3); // false

console.log(v1 == v2); // true
console.log(v1 === v2); // false


console.log('5' == 5); // true
console.log('5' === 5); // false
console.log(true == 1); // true
console.log(true === 1); // false

console.log('Hello' != 'HELLO'); // true
console.log('Hello' != 'hello'); // true

console.log(3 != '3'); // false
console.log(3 !== '3'); // true


console.log(10 >= 10); // true

console.log((10 >= '10') < 20); // true
let num1 = 10.4551;

console.log(num1.toFixed(2)); // 10.46
console.log(num1.toPrecision(2)); // 10

console.log((22.25).toFixed(1)); // 22.3
console.log((2.225).toPrecision(1)); // 2

console.log((0.004).toPrecision(4));

let num2 = 5;
let num3 = 10;

console.log(num2 + num3); // 15
console.log(num2.toString() + num3.toString()); // '510'




console.log(Number.isFinite(5)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite('Hello')); // false

console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false
console.log(Number.isInteger(10.21)); // false

console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false


console.log(Number.isNaN(5));
console.log(isNaN(5));

console.log(Number.parseInt('10') + 5); // 15
console.log(Number.parseInt('10.99') + 5); // 15
console.log(Number.parseFloat('10.5') + 5); // 15.5
console.log(Number.parseFloat('10') + 5); // 15

console.log(parseInt('100') + 1); // 101
console.log(parseInt('100.99') + 1); // 101
console.log(parseFloat('100.99') + 1); // 101.99



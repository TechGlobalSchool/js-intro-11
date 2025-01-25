// String 

let fullname = 'John Doe';

console.log(fullname); // John Doe 

console.log(typeof fullname); // string

console.log(typeof ''); // string
console.log(typeof 'Hello'); // string



// Number
let numberOfStudents = 10;
let subsPrice = 15.99;

console.log(numberOfStudents); // 10
console.log(subsPrice); // 15.99

console.log(typeof numberOfStudents); // number
console.log(typeof subsPrice); // number


console.log(typeof '25'); // string

console.log('5' + '5'); // '55' string
console.log('5' + 5); // '55' string
console.log(5 + 5); // 10 number


// bigint 

let biggestNumber = Number.MAX_SAFE_INTEGER; 
let smallestNumber = Number.MIN_SAFE_INTEGER;

console.log(biggestNumber); // 9007199254740991
console.log(smallestNumber); // -9007199254740991

let number1 = 9007199254740991;
let number2 = 90071992547409917n;
let number3 = BigInt('90071992547409917');

console.log(number1);
console.log(number2);
console.log(number3);

console.log(typeof number1); // number
console.log(typeof number2); // bigint
console.log(typeof number3); // bigint

console.log(90071992547409917n + 5n); // bigint requires bigint to be used for operations


// boolean 
let b1 = true;
let b2 = false;

console.log(b1);
console.log(b2);

console.log(typeof b1);
console.log(typeof b2);

let age = 14;

let allowed = age >= 16; // 

console.log(allowed);

if (age >= 16) {
  console.log('You are allowed to get DL!');
}
else {
  console.log('You are NOT allowed to get DL!');
}

console.log(typeof (5 === 5)); // boolean
console.log(typeof ('Hi' === 'hi')); // boolean


// undefined 
let today;
console.log(today); // undefined
console.log(typeof today); // undefined

let tomorrow = undefined;
console.log(tomorrow); // undefined
console.log(typeof tomorrow); // undefined


// null
let SSN = null;
console.log(SSN); // null
console.log(typeof SSN); // object


// Symbol
let s1 = Symbol('Foo');
let s2 = Symbol('SOS');
let s3 = Symbol('XOX');

console.log(s1); // Symbol(Foo)
console.log(s2); // Symbol(SOS)
console.log(s3); // Symbol(XOX)

console.log(typeof s1); // symbol
console.log(typeof s2); // symbol
console.log(typeof s3); // symbol
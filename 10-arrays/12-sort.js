const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander' ];

names.sort();

console.log(names); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]

const numbers = [ 1, 40, 15, 20, 2];

numbers.sort((x, y) => x - y);

console.log(numbers); // [ 1, 2, 15, 20, 40 ]


const studentAges = [ 25, 19, 45, 55, 32 ];
studentAges.sort((a, b) => b - a); // [ 55, 45, 32, 25, 19 ]

console.log(`The youngest age is ${studentAges[0]}.`);
console.log(`The oldest age is ${studentAges.at(-1)}.`);

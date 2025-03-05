const numbers = [-2, -5, 3, 0, 5, 8, 10]; 

// count even and positive numbers -> 2

let countEvenPos = numbers.reduce((acc, curr) => curr > 0 && curr % 2 === 0 ? acc + 1 : acc, 0);

console.log(countEvenPos);



const nums = [
  [1, 2, 3],
  [5, 10, 20],
  [100, 200]
];

// Find sum of numbers of inner arrays : [6, 35, 300]

const result = nums.map((x) => x.reduce((acc, curr) => acc + curr, 0));

console.log(result);

/*
const result = [];

for(const innerArr of nums) { // [5, 10, 20]
  let sum = 0;
  for(const num of innerArr) {
    sum += num;
  }
  result.push(sum);
}

console.log(result); // [ 6, 35, 300 ]
*/

const words = [ 'hello', 'Tuesday', 'HEYY', 'Apple' ];

// Find all the words that has 5 letters: [ 'HELLO, 'APPLE' ]

const result1 = [];

words.forEach((x) => {
  if(x.length === 5) result1.push(x.toUpperCase());
});

console.log(result1);

const result2 = words.filter(x => x.length === 5).map(x => x.toUpperCase());
console.log(result2);

// 'hello', 'Tuesday', 'HEYY', 'Apple'
// ['HELLO', 'APPLE']
// reduce initial value array issue
const result3 = words.reduce((acc, curr) => {
  if(curr.length === 5) acc.push(curr.toUpperCase());
  return acc;
}, []);

console.log(result3);
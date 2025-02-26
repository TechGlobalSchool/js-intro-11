// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 …. 0
/*
start: 100
end: 0
update: --
*/

for(let i = 100; i >= 0; i--) {
  console.log(i);
}

// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50
/*
start: 0
end: 50
update: ++
*/

for(let i = 0; i <= 50; i++) { 
  if(i % 2 === 0) console.log(i);
}

for(let i = 0; i <= 50; i += 2) {
  console.log(i);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 …. 50
for(let i = 0; i <= 50; i++) {
  if(i % 5 === 0) console.log(i);
}

for(let i = 0; i <= 50; i += 5) {
  console.log(i);
}

// Find sum of the numbers from 1 to 5 (both inclusive) -> 15

let sum = 0;

for(let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum);

// Find sum of the numbers from 10 to 15 (both inclusive) -> 75
let total = 0;

for(let i = 15; i >= 10; i--) {
  total += i;
}

console.log(total);

// Find the product of all the numbers from 1 to 6 (both inclusive) -> 
// 1 * 2 * 3 * 4 * 5 * 6 -> 720

let product = 1;

for(let i = 2; i <= 6; i++) {
  product *= i;
}

console.log(product);

// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l
let str = 'TechGlobal School';

for(let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Count how many a's we have in the below string   -> 3
let fruit = 'banana';
let counterA = 0;

for(let i = 0; i < fruit.length; i++) {
  if(fruit[i] === 'a') {
    counterA++;
  }
}

console.log(counterA);

// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50

console.log('\n----------for-loop solution----------\n');
for(let i = 0; i <= 50; i++) { // i is block-scoped
  if(i % 2 === 0) console.log(i);
}

console.log(i); // ReferenceError: i is not defined



console.log('\n----------while-loop solution----------\n');
let i = 0; // i is global-scoped

while(i <= 50) {
  if(i % 2 === 0) console.log(i);
  i++;
}

console.log(i); // 51


// Find sum of the numbers starting from 3 to 7 (both inclusive) -> 3 + 4 + 5 + 6 + 7 -> 25
console.log('\n----------for-loop solution----------\n');

console.log('\n----------while-loop solution----------\n');
let sum = 0;

let num = 3;

while(num <= 7) {
  sum += num;
  num++;
}

console.log(sum);
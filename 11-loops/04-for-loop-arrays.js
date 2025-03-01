const names = [ 'John', 'Jane', 'Alex' ];

for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log('End of the program!');


// Count how many even numbers we have in the array below -> 4
const numbers = [ 2, 6, 3, -1, 10, 8 ];

let countE = 0;

for(let i = 0; i < numbers.length; i++) { // 0, 1, 2, 3, 4, 5
  if(numbers[i] % 2 === 0) {
    countE++;
  }
}

console.log(countE);
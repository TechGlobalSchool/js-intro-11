const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ]; 

// Log each name

console.log(`\n------TASK01-------\n`);

for(const name of names) {
  console.log(name);
}

// Count how many names starts with j or J  -> 3

console.log(`\n------TASK02-------\n`);
let countJ = 0;

for(const name of names) { // i = 0, 1, 2, 3, 4
  if(name[0].toUpperCase() === 'J') countJ++;
}

console.log(countJ);


// 'John', 'Jane', 'Alex', 'Max', 'james'
// Count how many names have length of 4  -> 3

console.log(`\n------TASK03-------\n`);
let count4 = 0;

for(const name of names) {
  if(name.length === 4) count4++;
}

console.log(count4);
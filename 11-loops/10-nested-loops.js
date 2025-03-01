for(let i = 1; i <= 3; i++) {
  console.log('Saturday!');
  for(let j = 1; j <= 2; j++) {
    console.log('Hey');
  }
}

const names = [ 'Jane', 'Joe' ];

for(let i = 0; i < names.length; i++) { // 0, 1
  let currentName = names[i];
  console.log(currentName);

  for(let j = 0; j < currentName.length; j++) {
    console.log(currentName[j])
  }
}


let count = 0;
for(let i = 1; i <= 3; i++) {
  console.log('i =', i);
  for(let j = 1; j <= 5; j++) {
    console.log('\tj =', j);
    count++;
    console.log(count);
  }
}

console.log(count); // 15

let sum = 0; // 29

for(let i = 5; i <= 10; i++) { // i = 6
  sum += i;
  for(let j = 2; j <= i; j++) { // j = 4
    sum += j;
    if(j === 4) break;
  }
  if(sum >= 25) break;
}
console.log(sum);
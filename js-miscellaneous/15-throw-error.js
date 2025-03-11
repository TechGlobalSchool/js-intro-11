function validateAgeForDL(age) {
  if(age >= 16) return 'Valid!';
  throw new Error(`${age} is not allowed for DL!`);
}

try {
  const r1 = validateAgeForDL(15);

  console.log(r1);
}
catch(error) {
  console.log('You get an Error:', error.message);
}

console.log('Rest of program!');


try {
  // Approach A
}
catch(error) {
  // Approach B
}



const numbers = [ 2, 3, 5, 6 ];

try {
  const max = Math.max(numbers);
  console.log(max); // NaN

  if(!max) {
    throw Error('My first way did not work!');
  }
}
catch(error) {
  console.log('Error message:', error.message);
  console.log('Error name:', error.name);
  console.log('Error stack:', error.stack);
  console.log('Error cause:', error.cause);
  const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr);
  console.log(max);
}


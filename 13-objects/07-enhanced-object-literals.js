const eat = true;
const sleep = true;

// Before ES6
// const cat = {
//   name: 'Silver',
//   eat: eat,
//   sleep: sleep
// };

// After ES6
const cat = {
  name: 'Silver',
  eat,
  sleep
};

console.log(cat);


const batchNumber = 11;
const program = 'SDET';

const student1 = {
  batchNumber,
  program,
  fullname: 'John Doe'
};

console.log(student1);

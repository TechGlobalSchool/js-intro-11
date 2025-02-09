const { getRandomNumber } = require('./../utils/MathHelper.js');

let ran1 = getRandomNumber(1, 3);
console.log(`Random number is ${ran1}`);


switch(ran1) {
  case 1:
    console.log('ONE');
    break;
  case 2: 
    console.log('TWO');
    break;
  default: 
    console.log('THREE');
}
    



/*
if(ran1 === 1) {
  console.log('ONE');
}
else if(ran1 === 2) {
  console.log('TWO');
}
else {
  console.log('THREE');
}
  */

console.log('End of the program!');

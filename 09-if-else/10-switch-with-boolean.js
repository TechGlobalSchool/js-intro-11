// This is something not available in Java-C#

const { getRandomNumber } = require('./../utils/MathHelper.js');

let ran1 = getRandomNumber(-100, 100);
console.log(`Random number is ${ran1}`); // -67

switch(true) {
  case ran1 > 0: 
    console.log('POS');
    break;
  case ran1 < 0: 
    console.log('NEG');
    break;
  default:
    console.log('NEUTRAL');
}


if(ran1 > 0) {
  console.log('POS');
}
else if(ran1 < 0) {
  console.log('NEG');
}
else {
  console.log('NEUTRAL');
}
const { getRandomNumber } = require('./../utils/MathHelper.js');

/*
Get a random number between -5 and 5
Find if the number is POS, NEG, NEUTRAL
*/

let ran1 = getRandomNumber(-5, 5);
console.log(`The random num1 is = ${ran1}`);

if(ran1 > 0) {
  console.log('POS');
}
else if(ran1 < 0) {
  console.log('NEG');
}
else { 
  console.log('NEUTRAL');
}

if(ran1 > 0) console.log('POS');
else if(ran1 < 0) console.log('NEG');
else console.log('NEUTRAL');

let result1 = ran1 > 0 ? 'POS' : ran1 < 0 ? 'NEG' : 'NEUTRAL';
console.log(result1);

console.log('End of the program!');
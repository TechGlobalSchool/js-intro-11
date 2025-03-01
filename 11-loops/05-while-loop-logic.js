const { getRandomNumber } = require('./../utils/MathHelper');

let gameNumber = 5;
let attempts = 0;
let randomNumber; // undefined

while(randomNumber !== gameNumber) {
  randomNumber = getRandomNumber(1, 10); 
  attempts++;
}

// for( ; ; ) {
//   let randomNumber = getRandomNumber(1, 10);
//   attempts++;

//   if(randomNumber === gameNumber) {
//     break;
//   }
// }

let time = attempts === 1 ? 'time' : 'times';

console.log(`Game is over after ${attempts} ${time}!`);


// Keep generating a random number between 1-15 (inclusive) 
// until you get lucky number = 13

let ran; // undefined
let countAt = 0;

do {
  ran = getRandomNumber(1, 15);
  countAt++;
} while (ran !== 13);

console.log(`We got 13 after ${countAt} times.`);
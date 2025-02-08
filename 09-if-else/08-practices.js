const { getRandomNumber } = require("./../utils/MathHelper.js");

let username = "TechGlobal"; // TechGlobal
let password = "Test1234"; // Test1234

if (username === "TechGlobal") {
  if (password === "Test1234") {
    console.log("You are logged in");
  } else {
    console.log("Invalid Password entered!");
  }
} else {
  console.log("Invalid Username entered!");
}

/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

let month = getRandomNumber(1, 12);
console.log(`Random month is = ${month}`);

if (month === 12 || month === 1 || month === 2) console.log("Winter");
else if (month <= 5) console.log("Spring");
else if (month <= 8) console.log("Summer");
else console.log("Fall");

let season =
  month === 12 || month === 1 || month === 2
    ? "Winter"
    : month <= 5
    ? "Spring"
    : month <= 8
    ? "Summer"
    : "Fall";

console.log(season);

let price = 0;
let brand = 'Samsung';
let ssd = 128;
let color = 'Black';

if(brand === 'iPhone') {
  price += 1000;

  if(ssd === 16) price += 100;
  else if(ssd === 32) price += 150;
  else if(ssd === 64) price += 250;
  else if(ssd === 128) price += 400;
  else if(ssd === 256) price += 500;
  else if(ssd === 512) price += 600;

  if(color !== 'White') price += 100;
}
else {
  price += 750;
  
  if(ssd === 16) price += 50;
  else if(ssd === 32) price += 100;
  else if(ssd === 64) price += 200;
  else if(ssd === 128) price += 300;
  else if(ssd === 256) price += 400;
  else if(ssd === 512) price += 500;

  if(color !== 'White' && color !== 'Black') price += 50;
}

console.log(`Your custom ${brand} with ${ssd} GB SSD and ${color} color is $${price}`);
/*
let result = Math.floor(Math.random() * (max - min + 1)) + min;
let result = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
let result = Math.round(Math.random() * (max - min)) + min;
*/

/*
Task 1
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}
*/

console.log("=================Task1=================\n")

let rand = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
console.log(rand)
console.log(`The random number * 5 = ${rand * 5}`)

/*
Requirement:
Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/
console.log("\n=================Task2=================\n")

const rand1 = Math.ceil(Math.random() * (10 - 1 + 1));
const rand2 = Math.ceil(Math.random() * (10 - 1 + 1));

console.log(rand1, rand2)

const randMax = Math.max(rand1, rand2)
const randMin = Math.min(rand1, rand2)

const absDiff1 = Math.abs(rand1 - rand2);
const absDiff2 = randMax - randMin;

console.log(`Min number = ${randMin}`)
console.log(`Max number = ${randMax}`)
console.log(`Difference = ${absDiff1}`)
console.log(`Difference = ${absDiff2}`)


/*
Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}

*/
console.log("\n=================Task3=================\n")

//let result = Math.floor(Math.random() * (max - min + 1)) + min;
rand = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(rand)
console.log(`The random number % 10 = ${rand % 10}`)


/*
Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8

Expected result:
59

*/

console.log("\n=================Task4=================\n")

//way 1
/*
const r1 = (Math.floor(Math.random() * 10) + 1) * 5;
const r2 = (Math.floor(Math.random() * 10) + 1) * 4;
const r3 = (Math.floor(Math.random() * 10) + 1) * 3;
const r4 = (Math.floor(Math.random() * 10) + 1) * 2;
const r5 = (Math.floor(Math.random() * 10) + 1);

console.log(r1,r2,r3,r4,r5)

let score = r1 + r2 + r3 + r4 + r5;

console.log(score)
*/

//way 2
let score = 0;


const r1 = (Math.floor(Math.random() * 10) + 1);
score += r1 * 5;
//score = score + (r1 * 5)
const r2 = (Math.floor(Math.random() * 10) + 1);
score += r2 * 4;

const r3 = (Math.floor(Math.random() * 10) + 1);
score += r3 * 3;

const r4 = (Math.floor(Math.random() * 10) + 1);
score += r4 * 2;

const r5 = (Math.floor(Math.random() * 10) + 1);
score += r5;

console.log(r1,r2,r3,r4,r5)
console.log(score)

/*
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/
console.log("\n=================Task5=================\n")

const random_1_25 = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
const random_26_50 = Math.floor(Math.random() * (50 - 26 + 1)) + 26;
const random_51_75 = Math.floor(Math.random() * (75 - 51 + 1)) + 51;
const random_76_100 = Math.floor(Math.random() * (100 - 76 + 1)) + 76;

console.log(Math.max(random_1_25,random_26_50,random_51_75,random_76_100))

const diffMaxMin = random_76_100 - random_1_25;
const diff2_3 = random_51_75 - random_26_50;
const avg = (random_1_25 + random_26_50 + random_51_75 + random_76_100) / 4;

console.log(`Difference of max and min = ${diffMaxMin}`)
console.log(`Difference of second and third = ${diff2_3}`)
console.log(`Average of all = ${avg}`)

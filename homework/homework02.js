// Task-1
/*
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

NOTE: expected results should exactly match!!
*/
let str1 = "5", str2 = "2";
let num1 = Number(str1), num2 = Number(str2)
//let num1 = parseInt(str1), num2 = parseInt(str2)
//let num1 = str1 * 1, num2 = str2 * 1

console.log(`The sum of ${num1} and ${num2} is = ${num1 + num2}`);
console.log(`The product of ${num1} and ${num2} is = ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is = ${num1 / num2}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${num1 - num2}`);
console.log(`The remainder of ${num1} and ${num2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${num1} and ${num2} is = ${num1 ** num2}`);


// Task-2
/*
Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!
*/
console.log("\n------------Task-2------------\n");
let s1 = "200", s2 = "-50";
let n1 = Number(s1), n2 = Number(s2);

console.log(`The greatest value is = ${Math.max(num1, num2)}`)
console.log(`The smallest value is = ${Math.min(num1, num2)}`)
console.log(`The average is = ${(num1 + num2) / 2}`)
console.log(`The absolute difference is = ${Math.abs(num1 - num2)}`)


// Task-3
/*
Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included)
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22
*/
console.log("\n------------Task-3------------\n");

let rand1 = Math.ceil(Math.random() * 50);
let rand2 = Math.ceil(Math.random() * 50);

console.log(rand1)
console.log(rand2)

console.log(`The absolute difference between numbers is = ${Math.abs(rand1 - rand2)}`)


// Task-4
/*
Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included)
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/
console.log("\n------------Task-4------------\n");


let randNum3 = Math.ceil(Math.random() * 50);
let randNum4 = Math.ceil(Math.random() * 50);
let randNum5 = Math.ceil(Math.random() * 50);
let randNum6 = Math.ceil(Math.random() * 50);
let randNum7 = Math.ceil(Math.random() * 50);

console.log(`The max value = ${Math.max(randNum3, randNum4, randNum5, randNum6, randNum7)}`);
console.log(`The min value = ${Math.min(randNum3, randNum4, randNum5, randNum6, randNum7)}`);


// Task-5
/*
Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/
console.log("\n------------Task-5------------\n");

let randNum8 = (Math.floor(Math.random() * 51) + 50); 
let randNum9 = (Math.floor(Math.random() * 51) + 50); 
let randNum10 = (Math.floor(Math.random() * 51) + 50); 

console.log(`The number 1 = ${randNum8}`);
console.log(`The number 2 = ${randNum9}`);
console.log(`The number 3 = ${randNum10}`);
console.log(`The sum of numbers is = ${randNum8 + randNum9 + randNum10}`);


// Task-6
/*
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25.
*/
console.log("\n------------Task-6------------\n");

let randomNum1 = Math.ceil(Math.random() * 100);
let randomNum2 = Math.ceil(Math.random() * 100);
let randomNum3 = Math.ceil(Math.random() * 100);

console.log(randomNum1 > 25 && randomNum2 > 25 && randomNum3 > 25);



// Task-7
/*
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/
console.log("\n------------Task-7------------\n");

let name = "David";

console.log(`The length of the name is = ${name.length}`)
console.log(`The first character in the name is = ${name[0]}`)
console.log(`The last character in the name is = ${name[name.length - 1]}`)
console.log(`The first 3 characters in the name are = ${name.slice(0,3)}`)

console.log(`The last 3 characters in the name are = ${name.slice(name.length - 3)}`)

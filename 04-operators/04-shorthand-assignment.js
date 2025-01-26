// = assignment operator

// Shorthand assignment operators

let num = 5;

// increase the num variable by 5
// num = num + 5;
num += 5;

console.log(num); // 10


let n1 = 10;

n1 *= 2; // n1 = 20

n1 /= 4; // n1 = 5

n1 **= 3; // n1 = 125

console.log(n1); // 125


let n2 = 7;

n2 += ++n2; // 15

n2 /= 3; // 5

console.log(n2++ % 3); // 2



let n3 = 20;
let n4 = 3;

n3 += (n4 -= 1); // n4 = 2, n3 = 22

--n3; // n3 = 21

console.log(--n3 * ++n4); // n3 = 20, n4 = 3 -> 60

/*
Find their
Product        24
Addition       10
Division       1.5
Substraction   2
Remainder      2
Exponentiation 1296
*/

let num1 = 6;
let num2 = 4;

console.log(`The sum of the numbers is = ${num1 + num2}`);
console.log(`The product of the numbers is = ${num1 * num2}`);
console.log(`The subtraction of the numbers is = ${num1 - num2}`);
console.log(`The division of the numbers is = ${num1 / num2}`);
console.log(`The remainder of the numbers is = ${num1 % num2}`);
console.log(`The exponentiation of the numbers is = ${num1 ** num2}`);


// Create variables if you will refer it more than once
let price = 10;
let quantity = 5;

let total = price * quantity;
// First calculate the total
// Then provide 20 percent discount

console.log(`The initial total is = $${total}`);
console.log(`The discounted total is = $${total * 0.8}`);


// Rectangle area and perimeter calculation
let side1 = 5;
let side2 = 8;

console.log(`The area is = ${side1 * side2}`);
console.log(`The perimeter is = ${2 * (side1 + side2)}`);


let salary = 120000;

console.log(`Monthly salary is = $${salary / 12}`);
console.log(`Weekly salary is = $${(salary / 52).toFixed(2)}`);
console.log(`Bi-weekly salary is = $${(salary / 26).toFixed(2)}`);
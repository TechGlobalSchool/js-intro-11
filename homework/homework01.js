/*Task1:
Requirement
-Write a program that outputs below sentences
-Double quotations must be displayed in your console when you run the code
-Every line below must be printed with a separate console.log() statement
 
I start to practice "JavaScript" today, and I like it.
The secret of getting ahead is getting started.
"Don't limit yourself. "
Invest in your dreams. Grind now. Shine later.
It's not the load that breaks you down, it's the way you carry it.
The hard days are what make you stronger.
You can waste your lives drawing lines. Or you can live your life crossing them
*/

console.log('I start to practice "JavaScript" today, and I like it.');
console.log('The secret of getting ahead is getting started.');
console.log('"Don\'t lim it yourself. "');
console.log('Invest in your dreams. Grind now. Shine later.');
console.log('It\'s not the load that breaks you down, it\'s the way you carry it.');
console.log('The hard days are what make you stronger.');
console.log('You can waste your lives drawing lines. Or you can live your life crossing them');

/*Task2:
Requirement
-Write a program that prints the whole below text in ONLY 1 console.log() statement
 (you can use escape sequences to insert line or a tab)
 
   JavaScript is a high-level programming language primarily used to build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.
   It is open source and has a huge community support, which means there are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn.

*/

console.log(
    `    JavaScript is a high-level programming language primarily used to 
build web applications. It is not limited to the web; it can also be used 
for the backend development with technologies like Node.js.

    It is open source and has a huge community support, which means 
there are plenty of resources and support available for learning. It 
uses a syntax like other programming languages and easy to learn.`
);
  
/*Task3:
Requirement
-Write a program that stores below information with proper data types and output all variables with separate console.log() statements.

myAge
myFavoriteNumber
myHeight
myWeight
myFavoriteLetter

*/

let myAge = 22, myFavoriteNumber = 8, myHeight = '5 ft 10"', myWeight = '160lbs', myFavoriteLetter = 'M';

console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);


/*Task4:
Requirement
-Create 2 variables called as num1, num2 and and store values of 25, 35 in these variables, respectively. 
Then, output the sum of the numbers with a proper message as given below.

Test Data:25, 35

Expected output: 
The sum of the numbers = 60

*/

let num1 = 25 , num2 = 35;
let sum = num1 + num2;
console.log(`The sum of the numbers = ${sum}.`);
/*Task5:
Requirement
-Create 2 variables called as n1, n2 and and store values of 5, 7 in these variables, respectively.
 Then, output the product of the numbers with a proper message as given below.

Test Data:5, 7

Expected output: 
The product of the numbers = 35

*/

let n1 = 5 , n2 = 7;
console.log(`The product of the numbers = ${n1 * n2}.`);
 
/*Task6:
Requirement
-Create 2 variables called as number1, number2 and and store values of 24, 10 in these variables, respectively. 
Then, output the sum (addition), multiplication, subtraction, division and remainder of these numbers with a proper message as given below.

Test Data:24, 10

Expected output: 
The sum of the numbers is = 34
The product of the numbers is = 240
The subtraction of the numbers is = 14
The division of the numbers is = 2.4
The remainder of the numbers is = 4
*/

let number1 = 24, number2 = 10;

let sum2 = number1 + number2;
let product = number1 * number2;
let sub = number1 - number2;
let div = number1 / number2;
let remainder = number1 % number2;

console.log(`The sum of the numbers is = ${sum}`);
console.log(`The product of the numbers is = ${product}`);
console.log(`The subtraction of the numbers is = ${sub}`);
console.log(`The division of the numbers is = ${div}`);
console.log(`The remainder of the numbers is = ${remainder}`);

/*Task7:
Requirement:
- Create 2 variables called as i1, i2 and and store values of 7, 11 in these variables, respectively. Then, output the average of the numbers.
Test Data:7, 11
Expected Output:
The average of the numbers is: 9

*/

let i1 = 7, i2 = 11
console.log(`The average of the numbers is: ${(i1+i2)/2}`)


/*Task8:
Requirement:
- Create 5 variables called as a1, a2, a3, a4, a5 and and store values of 6, 10, 12, 15, 17 in these variables, respectively.
 Then, output the average of the numbers.
Test Data:6, 10, 12, 15, 17
Expected Output:
The average of the numbers is: 12

*/
let a1 = 6, a2 = 10, a3 = 12, a4 = 15, a5 = 17; 
let average = (a1 + a2 + a3 + a4 + a5) / 5;

console.log(`The average of the numbers is: ${average}`);

/*Task9:
Requirement:
- Create 3 variables called as b1, b2, b3 and and store values of 5, 6, 10 in these variables, respectively. 
Then, output the square of each number entered by user.
NOTE: Square of number means number multiplied with itself
Test Data:5, 6, 10
Expected Output:
The 5 multiplied with 5 is = 25
The 6 multiplied with 6 is = 36
The 10 multiplied with 10 is = 100

*/
let b1 = 5, b2 = 6, b3 = 10;

console.log(`The ${b1} multiplied with ${b1} is = ${b1 * b1}`)
console.log(`The ${b2} multiplied with ${b2} is = ${b2 * b2}`)
console.log(`The ${b3} multiplied with ${b3} is = ${b3 * b3}`)


/*Task10:
Requirement:
- Create a variable called as side to be assumed as one side of a square and store value of 7 in that variable. 
Then, output the area and perimeter for that square.

NOTE: area of a square = side * side
            perimeter of a square = 4 * side
 
Test Data:7
Expected Output:
The perimeter of the square = 28 
The area of the square = 49
*/

let side = 7;

let area = side * side;
let perimeter = 4 * side;

console.log(`The perimeter of the square = ${perimeter}`);
console.log(`The area of the square = ${area}`);

/*Task11:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7

Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is  Blue
The favorite number is  7
*/

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;

console.log(
`The favorite book is ${favBook}
The favorite color is ${favColor}
The favorite number is ${favNumber}`
)
// console.log('The favorite book is ' + favBook +
// "\nThe favorite color is " + favColor +
// "\nThe favorite number is " + favNumber
// )


/*Task12:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	firstName = John
	lastName = Doe
	age = 45
	emailAddress = johndoe@gmail.com
	phoneNumber = (123) 123 1234
	address = 123 St Chicago IL 12345

Expected output: (it should exactly be same as below paragraph)
          User who joined this program is John Doe. John's age is 45. John's email address is johndoe@gmail.com, phone number is (123) 123 1234, and address is 123 St Chicago IL 12345.


*/
let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 St Chicago IL 12345';

console.log(
`   User who joined this program is ${firstName} ${lastName}. ${firstName}'s age is ${age}.
${firstName}'s email address is ${emailAddress}, phone number is 
${phoneNumber}, and address is ${address}`
);

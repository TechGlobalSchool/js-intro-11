/*
Task01

Requirement:
Write a function named as tripleWord() which takes a string word as an 
argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.

Examples:
tripleWord("Tech")  -> "TechTechTech"
tripleWord("Global")  -> "GlobalGlobalGlobal"
*/
console.log("==========task01=========\n")

const tripleWord1 = word => word.repeat(3);
const tripleWord2 = word => word + word + word;
const tripleWord3 = word => word.concat(word, word);

console.log(tripleWord1("Tech"))

/*
Task02

Write a function named as has4() which takes a string word as an 
argument and returns true if given string has at least 4 characters, and 
false otherwise when invoked.

Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false

*/

console.log("\n==========task02=========\n")

const has4 = word =>  word.length >= 4;

console.log(has4("hel"))

/*
Task03

Write a function named as celsiusToFahrenheit() which takes a number 
to be considered as celsius value and returns the Fahrenheit value when 
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 
to perform the conversion from celsius to Fahrenheit.
•Multiply the celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.

Examples:
celsiusToFahrenheit(20)  -> 68
celsiusToFahrenheit(25)  -> 77
celsiusToFahrenheit(0)  -> 32
celsiusToFahrenheit(-10)  -> 14
*/
console.log("\n==========task03=========\n")

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(20))//68
console.log(celsiusToFahrenheit(25))//77
console.log(celsiusToFahrenheit(0))//32
console.log(celsiusToFahrenheit(-10))//14


/*
Task04

Write a function named as kgToPounds() which takes a number to be 
considered as Kilograms value and returns the Pounds value when 
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to 
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.

Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220
*/

console.log("\n==========task04=========\n")
const kgToPounds1 = kg => {
  let pounds = (kg * 2.2).toFixed(1);
  let poundsStr = pounds + "";
  if(poundsStr.split('.')[1] === '0') pounds = Number(poundsStr.split('.')[1])
  
    return pounds;
};

const kgToPounds2 = kg => {
  let pounds = (kg * 2.2)

  if(pounds % 1 === 0) return pounds;
  else return parseFloat(pounds.toFixed(1))
}

console.log(kgToPounds2(1))
console.log(kgToPounds2(20))
console.log(kgToPounds2(75))
console.log(kgToPounds2(100)) 

/*
Task05

Write 2 functions named as rectangleArea() and rectanglePerimeter() 
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)

Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32
*/

console.log("\n==========task05=========\n")

const rectangleArea = (width, height) => {
  return width * height;
} 

const rectanglePerimeter = (width, height) => {
  return 2 * (width + height)
}

console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));
console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));


/*
Task06

Write 2 functions named as squareArea() and squarePerimeter() which 
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x

Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
squarePerimeter(6)  -> 24
*/

console.log("\n==========task06=========\n")

const squareArea = (side) => side * side;
//const squareArea = (side) => side ** 2;
//const squareArea = (side) => side.pow(2);
function squarePerimeter(side) {
  return side * 4;
} 


console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));


// Write a function named as countWords() which takes a String and returns 
// the number of words that are in the string

//countString("Hello, my name is John Doe") -> 6

const countString = str => {
  let strAsArr = str.trim().split(/[ ]+/)
  return strAsArr.length;
}

console.log(countString("    Hello, my  name    is    John Doe    "))


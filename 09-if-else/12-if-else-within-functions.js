function evenOdd(number) {
  return number % 2 === 0 ? "EVEN" : "ODD";
}

console.log(evenOdd(2));
console.log(evenOdd(3));

const posNegZero = (number) => {
  return number > 0 ? "POS" : number < 0 ? "NEG" : "ZERO";
};

console.log(posNegZero(1));
console.log(posNegZero(0));
console.log(posNegZero(-1));

/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/

function startE(name) {
  return name.trim().length !== 0 && name[0].toLowerCase() === "e";
  //return name.toUpperCase().startsWith('E');
}

console.log(startE(""));

const startEArrow = (name) =>
  name.trim().length !== 0 && name[0].toLowerCase() === "e";

/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

function divisible5(number) {
  return number % 5 === 0;
}

console.log(divisible5(5));
console.log(divisible5(6));


/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

function fooBar(number) { 
  if(number % (5 * 7) === 0) return 'foobar';
  else if(number % 5 === 0) return 'foo';
  else if(number % 7 === 0) return 'bar';
  return number;
}

console.log(fooBar(2)); // 2
console.log(fooBar(5)); // foo
console.log(fooBar(7)); // bar
console.log(fooBar(70)); // foobar
//Task 1
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;

let average = Math.floor((num1 + num2 + num3) / 3);
console.log(average >= 50 ? true : false);

//Task 2
/*
Requirement:
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”

Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH

Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH

Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH

Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH
*/
let rand1 = Math.floor((Math.random() * 3) + 1);
let rand2 = Math.floor((Math.random() * 3) + 1);
let rand3 = Math.floor((Math.random() * 3) + 1);

console.log(`${rand1} ${rand2} ${rand3} `)

if(rand1 === rand2 && rand2 === rand3) console.log('TRIPLE MATCH');
else if(rand1 !== rand2 && rand2 !== rand3) console.log('NO MATCH')
else console.log('DOUBLE MATCH');

//Task 3
/*
Requirement:
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/

function hasA(str) {
    return str.includes('a') || str.includes('A')
}

console.log(hasA("Tech")) //false
console.log(hasA("Global")) //true
console.log(hasA("")) //false
console.log(hasA("Apple")) //true


//Task 4
/*
Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/
const doubleOrTripleWord = (str) => {
  if(str.length % 2 === 0) return `${str}${str}${str}`
  else return `${str}${str}`
  /*
    WAY2: 
    if(str.length % 2 === 0) return str.padStart(str.length * 3, str)
    else return str.padStart(str.length * 2, str)
*/
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

//Task 5
/*
Requirement:
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""
*/
function firstWord(str){
    str = str.trim()
    if(str.includes(' ')) return str.slice(0, str.indexOf(' '))
    else return str;
// return str.trim().split(' ')[0]
}
console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord("   "));

//Task 6
/*
Requirement:
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""
*/

function lastWord(str){
    str = str.trim().split(' ');
    return str[str.length - 1]
    // str = str.trim();
    // if(str.includes(' ')) return str.slice(str.lastIndexOf(' ') + 1)
    // else return str;

}

console.log(lastWord("Hello World"));// [hello, world]
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));// [Hello]
console.log(lastWord(""));
console.log(lastWord("   "));

//Task 7
/*
Requirement: 
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.

Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/

function firstlastWord(str){
    //  str = str.trim().split(' ');
    //  return str[0] + str[str.length - 1];

    str = str.trim();
    if(str.includes(' ')) return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1)
    else return str + str;
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("   "));

//Task 8
/*
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

function startVowel(str){
    // str = str.toLowerCase()
    // if(str.startsWith('a')) return true;
    // else if(str.startsWith('e'))return true;
    // else if(str.startsWith('i'))return true;
    // else if(str.startsWith('o'))return true;
    // else if(str.startsWith('u'))return true;
    // return false;

    return 'aeiouAEIOU'.includes(str[0])
    
}

console.log(startVowel("Hello"));// false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange"));// true
console.log(startVowel("")); //false
console.log(startVowel("    "));//false
console.log(startVowel("123") );//false

//Task 9
/*
Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.

Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/

function swap4(str){
    if(str.length < 8) return "";
    
    let first4 = str.slice(0, 4);
    let middle = str.slice(4 , -4);
    let last4 = str.slice(-4); 

    return last4 + middle + first4
}

console.log(swap4("abc"));
console.log(swap4("Javascript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));

//Task 10
/*
Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.

Examples:
swapFirstLastWord("Hello World")  -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""
*/

const swapFirstLastWord = (str) => {
    str = str.trim();

    if(str.includes(' ')){
        let firstWord = str.slice(0, str.indexOf(' '));
        let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
        let lastWord = str.slice(str.lastIndexOf(' ') + 1);

        return lastWord + middle + firstWord
    }

    return "";

}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello  "));

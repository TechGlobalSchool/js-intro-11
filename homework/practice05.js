/*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

const num = 1;

//switch case way
switch(true){
  case num >= 1 && num <= 25:{
    console.log(`${num} is in the 1st half`)
    console.log(`${num} is in the 1st quarter`)
    break;
  }
  case num >= 26 && num <= 50:{
    console.log(`${num} is in the 1st half`)
    console.log(`${num} is in the 2nd quarter`)
    break;
  }
  case num >= 51 && num <= 75:{
    console.log(`${num} is in the 2nd half`)
    console.log(`${num} is in the 3rd quarter`)
    break;
  }
  case num >= 76 && num <= 100:{
    console.log(`${num} is in the 2nd half`)
    console.log(`${num} is in the 4th quarter`)
    break;
  }
  default : console.log("this number is out of scope")
}


//if-else way
if(num <= 25) {
  console.log(`${num} is in the 1st half`)
  console.log(`${num} is in the 1st quarter`)
}
else if(num <= 50){
  console.log(`${num} is in the 1st half`)
  console.log(`${num} is in the 2nd quarter`)
}else if(num <= 75){
  console.log(`${num} is in the 2nd half`)
  console.log(`${num} is in the 3rd quarter`)
}else{
  console.log(`${num} is in the 2nd half`)
  console.log(`${num} is in the 4th quarter`)
}

// if-else way2
if(num < 51) {   
  console.log('First half')     
  if(num <= 25) console.log('First Quarter')
    else console.log('Second Quarter')
  }
  else {
    console.log('Second half')
    if(num <= 75) console.log('Third Quarter')
      else console.log('Fourth Quarter')
  } 
  
/*
Task02

Requirement:
Assume you are given 3 numbers between 1 and 100 
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false

Test data 1: 2, 4, 6
Expected result 1: true

Test data 2: 68, 44, 2
Expected result 2: true

Test data 3: 10, 20, 25
Expected result 3: false

Test data 4: 51, 67, 99
Expected result 4: false
*/

const num1 = 2;
const num2 = 6;
const num3 = 6;

console.log(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0)


//This way is incorrect!!!
if(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0){
  console.log(true)
}else{
  console.log(false)
}
  

/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.

Test data 1: "a"
Expected result 1:
"a"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 2: "$"
Expected result 1: 
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is a whitespace
*/
const char = '6';

if(/[a-zA-Z]/.test(char)) console.log(`"${char}" is a letter`);
else if(/[0-9]/.test(char)) console.log(`"${char}" is a digit`);
else if(' ' === char) console.log(`"${char}" is a white space`);
else console.log(`"${char}" is a special character`);

if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) console.log(`"${char}" is a letter`);
else if(char >= '0' && char <= '9') console.log(`"${char}" is a digit`);
else if(char === ' ') console.log(`"${char}" is a whitespace`);
else console.log(`"${char}" is a special character`);




/*
Task04

Write a function named hasBlue() which takes a string argument 
and returns true if the string has an occurrence of blue word, 
returns false otherwise.
NOTE: Ignore upper/lower cases.

Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/
function hasBlue(string) {
return string.toLowerCase().includes('blue')
}




function hasBlue(str){
  let result = str.toLowerCase().includes('blue')
  return result
}
console.log(hasBlue("Hello World"));//false
console.log(hasBlue("Javabluescript"));//true
console.log(hasBlue("Tech Blue Global"));//true
console.log(hasBlue("1234"));//false
console.log(hasBlue("ABLUEC"));//true


/*
Task05

Write a function named startT() which takes a string argument 
and returns true if the string start with letter T, returns false 
otherwise.
NOTE: Ignore upper/lower cases.

Examples:
startT("Hello World")    -> false
startT("typescript")    -> true
startT("TechGlobal")    -> true
startT("1234")    -> false
startT("ABC")    -> false
*/

//way 1
const startT1 = word => {
  return word.toLowerCase().startsWith('t')
}

//way 2
const startT2 = word => {
  return word.startsWith('t') || word.startsWith('T')
}

//way3 regex
const startT3 = word => {
  return /^[t]/i.test(word)
}
console.log(startT3("typescript"))
console.log(startT3("TechGlobal"))
console.log(startT3("1234"))
console.log(startT3("ABC"))

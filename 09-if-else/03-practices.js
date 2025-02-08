/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL

EDGE SCENARIOS:
MUST
59
60
61

NICE TO HAVE
30
100

STILL GOOD TO HAVE 
'Hello'
null
undefined
*/

let examScore = 60;

if(examScore >= 60) {
  console.log('PASS');
}
else {
  console.log('FAIL');
}

if(examScore < 60) {
  console.log('FAIL');
} 
else {
  console.log('PASS');
}

// Short omitting curly braces - ONE Statement
if(examScore < 60) console.log('FAIL');
else console.log('PASS');

/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 60;

if(age < 65) {
  console.log('YOU CANNOT GET RETIRED!!!');
}
else {
  console.log('YOU CAN GET RETIRED');
}

if(age >= 65) {
  console.log('YOU CAN GET RETIRED');
}
else {
  console.log('YOU CANNOT GET RETIRED!!!');
}
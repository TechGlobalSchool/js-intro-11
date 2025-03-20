// Task 1
/*
Requirement:
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal"
*/

//Way 1:
const noSpace = (str) => str.split(' ').join('')

//Way 2:
// const noSpace = (str) => str.split("").filter(c => c !== " ").join("")

//Way 3:
//   let result = "";

//    for(c of str){
//       if(c !== ' ') result += c;
//    }
//    return result;
console.log(noSpace(""));               // ""
console.log(noSpace("Javascript"));     // "Javascript"
console.log(noSpace("    Hello   "));   // "Hello"
console.log(noSpace(" Hello World   "));// "HelloWorld"
console.log(noSpace("Tech Global"));   // "TechGlobal"

// Task 2
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("")  ->  ""
replaceFirstLast("Hello")  ->  "oellH"
replaceFirstLast("Tech Global")  -> "lech GlobaT"
replaceFirstLast("A")  -> ""
replaceFirstLast("    A      ")  -> ""
*/
const replaceFirstLast = (str) => {
    str = str.trim()
    return str.length < 2 ? "" : str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
 }
 
 console.log(replaceFirstLast(""))
 console.log(replaceFirstLast("Hello"))
 console.log(replaceFirstLast("Tech Global"))
 console.log(replaceFirstLast("A"))
 console.log(replaceFirstLast("    A      "))

// Task 3
/*
Requirement:
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true
*/
const hasVowel = (str) => str.split('').filter(c => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(c)).length > 0

   // str = str.toLowerCase();
   // return str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o')|| str.includes('u')
console.log(hasVowel(""))//false
console.log(hasVowel("JavaScript"))//true
console.log(hasVowel("Tech Global"))//true
console.log(hasVowel("1234"))//false
console.log(hasVowel("ABC"))//true

// Task 4
/*
Requirement:
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/
const checkAge = (YOB) => {
    const currYear = 2023;
    const age = currYear - YOB;
  
    if(age < 0 || age > 120) return 'AGE IS NOT VALID'
    else if(age >= 16) return "AGE IS ALLOWED"
    else return "AGE IS NOT ALLOWED"
  }
  
  console.log(checkAge(2015));  // "AGE IS NOT ALLOWED"
  console.log(checkAge(2007));  // "AGE IS ALLOWED"
  console.log(checkAge(2050));  // "AGE IS NOT VALID"
  console.log(checkAge(1920));  // "AGE IS ALLOWED"
  console.log(checkAge(1800));  // "AGE IS NOT VALID"

  // Task 5
/*
Requirement:
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/
const averageOfEdges = (num1, num2, num3) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3))/2;

console.log(averageOfEdges(0, 0, 0))
console.log(averageOfEdges(0, 0, 6))
console.log(averageOfEdges(-2, -2, 10))
console.log(averageOfEdges(-3, 15, -3))
console.log(averageOfEdges(10, 13, 20))

// Task 6
/*
Requirement:
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", "###"]
*/
const noA = (arr) => arr.map(i =>  i.toLowerCase()[0] === 'a' ? '###' : i)


console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["apple", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))

// Task 7
/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/
const no3Or5 = (arr) => {
   return arr.map(num => {
     if(num % 3 === 0 && num % 5 === 0) return 101;
     else if(num % 3 === 0) return 100;
     else if(num % 5 === 0) return 99;
     return num;
   })
 }
 
 console.log(no3Or5([7, 4, 11, 23, 17]))
 console.log(no3Or5([3, 4, 5, 6]))
 console.log(no3Or5([10, 11, 12, 13, 14, 15]))

 // Task 8
/*
Requirement:
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/
const countPrime = (arr) => {

   return arr.filter(num => {
     if(num < 2) return false;
     if(num === 2) return true;
     if(num % 2 === 0) return false
 
     for(let i = 3; i < num; i+=2){
       if(num % i === 0) return false
     }
     return true;
   }).length;
 }
 
 console.log(countPrime([-10, -3, 0, 1]))
 console.log(countPrime([7, 4, 11, 23, 17]))
 console.log(countPrime([41, 53, 19, 47, 67]))

 // Task 9
/*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/
const removeDuplicates = (arr) => {
   let result = [];
 
   arr.forEach(i => {
     if(!result.includes(i)) result.push(i)
   })
 
   return result;
 }
 
 console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));  // [10, 20, 35, 60, 70]
 console.log(removeDuplicates([1, 2, 5, 2, 3]));  // [1, 2, 5, 3]
 console.log(removeDuplicates([0, -1, -2, -2, -1]));  // [0, -1, -2]
 console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));  // ["abc", "xyz", "123", "ab", "ABC"]
 console.log(removeDuplicates(["1", "2", "3", "2", "3"]));  // ["1", "2", "3"]

 // Task 10
/*
Requirement:
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
Examples:
isDateFormatValid("")  -> false
isDateFormatValid("15/30/2020")  -> false
isDateFormatValid("10-30-2020 ")  -> false
isDateFormatValid("10.30.2020")  -> false
isDateFormatValid("5/30/2020")  -> false
isDateFormatValid("05/30/2020 ")  -> true
isDateFormatValid("10/2/2020")  -> false
isDateFormatValid("10/02/2020 ")  -> true
*/
const isDateFormatValid = (date) =>{
   const dateAsArr = date.split('/')
 
   if(dateAsArr.length !== 3) return false;
 
   const month = date.split('/')[0]
   const day = date.split('/')[1]
   const year = date.split('/')[2]
 
   if(month.length !== 2 || day.length !== 2 || year.length !== 4) return false;
 
   if(Number(month) < 1 || Number(month) > 12) return false
 
   if(Number(day) < 1) return false;
 
   if(Number(year) < 1) return false;
 
   if(Number(month) === '01')
   return true;
 }
 
 console.log(isDateFormatValid(""));  // false
 console.log(isDateFormatValid("15/30/2020"));  // false
 console.log(isDateFormatValid("10-30-2020"));  // false
 console.log(isDateFormatValid("10.30.2020"));  // false
 console.log(isDateFormatValid("5/30/2020"));  // false
 console.log(isDateFormatValid("05/30/2020"));  // true
 console.log(isDateFormatValid("10/2/2020"));  // false
 console.log(isDateFormatValid("10/02/2020"));  // true

// Task 11
/*
Requirement:
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 5
secondMax([10])  -> 10
*/
const secondMax = (arr) => {
  const sortedArr = arr.sort((a,b) => b - a)

  for(num of sortedArr){
    if(num !== sortedArr[0]) return num;
  }
  return sortedArr[0]
}

  //WITHOUT USING SORT
  // let max = arr[0];
  // let secondMax;

  // for(num of arr){
  //   if(num > max){
  //     secondMax = max;
  //     max = num;
  //   }else {
  //     if(num > secondMax && num !== max)
  //     secondMax = num;
  //   }
  // }

  // return secondMax || max
  
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMax([3, 4, 5, 6]))
console.log(secondMax([10]))

// Task 12
/*
Requirement:
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.
NOTE: Be careful when there is multiple min numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 4
secondMax([10])  -> 10
*/
const secondMin = (arr) => {
  arr = arr.sort((a, b) => a - b)
  
  for(num of arr){
      if(num !== arr[0]) return num;
  }

  return arr[0]
}
  
console.log(secondMin([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMin([3, 4, 5, 6]))
console.log(secondMin([10]))

// Task 13
/*
Requirement:
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> "pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> "TechGlobal"
*/
const mostRepeated = (arr) => {
  let counts = {}
  let largestCount = 0;
  let mostRepeated;

  for(el of arr){
    if(counts[el]){
        counts[el]++;
    }else{
        counts[el] = 1
    }

    if(counts[el] > largestCount){
        largestCount = counts[el]
        mostRepeated = el;
    }
  }
  return mostRepeated
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));  // 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));  // "pen"
console.log(mostRepeated([10]));  // 10
console.log(mostRepeated(["TechGlobal"]));  // "TechGlobal"

/*
Task01
Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])     -> 1
*/

console.log("==========TASK01==========\n")


const firstPos1 = arr => {
  for(const ele of arr){
    if(ele > 0) return ele
  }
}

const firstPos2 = arr => arr.filter(ele => ele > 0)[0];

const firstPos3 = arr => arr.find(ele => ele > 0)

console.log(firstPos3([0, 3, -9,  5, 8]))
console.log(firstPos3([-2, 0, -7, 10, -5]))
console.log(firstPos3([1, 2, 3, -2]))

/*
Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/

console.group("\n==========Task02==========\n");

const lastNeg = arr => {
  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] < 0) return arr[i];
  }
}

// const lastNeg = arr => arr.filter(ele => ele < 0).at(-1);
// const lastNeg = arr => arr.reverse().find(ele => ele < 0);
// const lastNeg = arr => arr.findLast(ele => ele < 0);

console.log(lastNeg([0, 3, -9,  5, 8]))
console.log(lastNeg([-2, 0, -7, 10, -5]))
console.log(lastNeg([1, 2, 3, -2]))

/*

Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/

console.group("\n==========Task03==========\n");

const firstLongest = arr => {
  let longest = arr[0]

  for(const ele of arr){
    if(ele.length > longest.length) longest = ele
  }
  return longest;
}
// const firstLongest = arr => arr.reduce((longest, ele) => ele.length > longest.length ? ele : longest)
// const firstLongest = arr => arr.sort((a,b) => b.length - a.length)[0]

console.log(firstLongest(["red", "blue", "yellow", "white"]))
console.log(firstLongest(["Apple", "Banana", "Orange"]))
console.log(firstLongest(["purple", "yellow", "orange"]))

/*
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the smallest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/

const min = arr => {
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){
    if (arr[i] < min) min = arr[i]
  }
  console.log(iteration)
  return min;
}

// const min = arr => arr.sort((a,b) => a-b)[0]

// const min = arr => Math.min(...arr)

console.log(min([0, 3, 5, 8]));
console.log(min([-2, 0, -7, 10, -5]));
console.log(min([1, 2, 3, 15]));

/*
Requirement:
Write a function named as commonElements() which takes 2 arrays 
as arguments and returns the all the matching elements from the 
both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ])  -> [ 20, 
50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])  -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ])  -> 
["abc" ]
*/

const commonElements = (arr1,arr2) => {
  let result = [];

  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]) {
        result.push(arr1[i])
        break;
    }
  }
}
   return result
}



const commonElements = (arr1,arr2) => arr1.reduce((common, ele) => arr2.includes(ele) && !common.includes(ele)? common.concat(ele) : common,[])

const commonElements = (arr1,arr2) => {
  let arrCommons = []

  for(let ele of arr1){
      if(arr2.includes(ele) && !arrCommons.includes(ele)) arrCommons.push(ele)
  }

  return arrCommons;
}

console.log(commonElements([ 20, 50, 70 ], [ 10, 20, 30, 50, 70 ]));
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])); 
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ])); 

console.log(commonElements([ 1,2,2,3], [2,3,4,5]));





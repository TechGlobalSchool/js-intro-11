const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];

// Put together all these elements from a1, a2 and a3 in a descending order 
// in a new array -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]

const newArr1 = [...a1, ...a2, ...a3].sort((a, b) => b - a);
const newArr2 = a1.concat(a2, a3).sort((a, b) => b - a);

console.log(newArr1);
console.log(newArr2);

/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 2, 1, 2 ]
Second array -> 	[ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];
const arr3 = [ ];

for(let i = 0; i < arr1.length; i++) { // i = 0, 1, 2, 3, 4
  //arr3[i] = arr1[i] * arr2[i];
  arr3.push(arr1[i] * arr2[i]);
}

console.log(arr1);
console.log(arr2);
console.log(arr3);
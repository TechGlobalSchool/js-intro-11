console.log('<<<<<<<<<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>>>>>>>>>');

const fizzBuzz1 = ( num ) => {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if(num % 3 === 0) return 'Fizz';
    else if(num % 5 === 0) return 'Buzz';
    else return num;
}

console.log(fizzBuzz1(1));
console.log(fizzBuzz1(2));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(15));

console.log('<<<<<<<<<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>>>>>>>>>');

const fizzBuzz2 = ( num ) => {
    
    const expectedResult= [];

    for (let i = 1 ; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0) expectedResult.push('FizzBuzz');
        else if(i % 3 === 0) expectedResult.push('Fizz');
        else if(i % 5 === 0) expectedResult.push('Buzz');
        else expectedResult.push(i);
    }
    
    return expectedResult

}

console.log(fizzBuzz2(5));
console.log(fizzBuzz2(15));

console.log('<<<<<<<<<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>>>>>>>>>');

function findSumNumbers( str ) {

    let sum = 0;
   
    for(let i = 0; i < str.length ; i++){
        if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 ){
            sum += Number(str.charAt(i));
        }
    }
    return sum;
}

console.log(findSumNumbers("a1b4c 6#"));

console.log('<<<<<<<<<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>>>>>>>>>');

function findBiggestNumber(str) {
    let currentNum = '';
    let numbers = [];
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let code = str.charCodeAt(i);
  
      if (code >= 48 && code <= 57) {
        currentNum += char; 
      } else {
        if (currentNum.length > 0) {
          numbers.push(Number(currentNum));
          currentNum = '';
        }
      }
    }
  
    if (currentNum.length > 0) {
      numbers.push(Number(currentNum));
    }
  
    return numbers.length > 0 ? Math.max(...numbers) : 0;
  }
  

console.log(findBiggestNumber("abc$"));               // -> 0
console.log(findBiggestNumber("a1b4c  6#"));           // -> 6
console.log(findBiggestNumber("ab110c045d"));         // -> 110
console.log(findBiggestNumber("525"));                // -> 525
console.log(findBiggestNumber("3 for 10 dollars"));   // -> 10

console.log('<<<<<<<<<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>>>>>>>>>');

function countOccurrencesOfCharacters ( str ) { 
    if(str === '') return '';

    let count = 1;
    let result = '';

    for(let i = 0; i < str.length ; i++){
        if(str[i] === str[i + 1])count++;
        else{
          result += count + str[i];
          count = 1;
        }
    }

    return result;

}

console.log(countOccurrencesOfCharacters(''));
console.log(countOccurrencesOfCharacters('abc'));
console.log(countOccurrencesOfCharacters('abbcca'));
console.log(countOccurrencesOfCharacters('aaAAa'));
console.log(countOccurrencesOfCharacters('www'));

console.log('<<<<<<<<<<<<<<<<<<< TASK 6 >>>>>>>>>>>>>>>>>>>>>>>');

function fibonacciSeries1 ( n ){

    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++ ){
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }

    return fibonacci;
}

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));

console.log('<<<<<<<<<<<<<<<<<<< TASK 7 >>>>>>>>>>>>>>>>>>>>>>>');

function fibonacciSeries2 ( n ){

    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++ ){
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }

    return fibonacci[fibonacci.length -1 ];
}

console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));

console.log('<<<<<<<<<<<<<<<<<<< TASK 8 >>>>>>>>>>>>>>>>>>>>>>>');

function findUniques(arr1, arr2) {
    const result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (!arr1.includes(arr2[i]) && !result.includes(arr2[i])) {
        result.push(arr2[i]);
      }
    }
  
    return result;
  }

console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));
  


console.log('<<<<<<<<<<<<<<<<<<< TASK 9 >>>>>>>>>>>>>>>>>>>>>>>');

function isPowerOf3 ( num ){

    for(let i = 1 ; i <= num; i*=3){
        if(i === num) return true;
    }
   return false;
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>>>>>>>>>>');


for(let i = 1; i <= 100 ; i++){
    if(i % 7 === 0){
        console.log(i);
    }
}

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>>>>>>>>>>');

for(let i = 1; i <= 50 ; i++){
    if(i % 2 === 0 && i % 3 === 0){
        console.log(i);
    }
}

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>>>>>>>>>>');

for(let i = 100; i >= 50 ; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>>>>>>>>>>');

for(let i = 0; i <= 7 ; i++){
    console.log(`The square of ${i} is = ${i * i}`);
}

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>>>>>>>>>>');

let sum = 0;

for(let i = 1; i <= 10 ; i++){
    sum +=i;
}

console.log(sum);

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 6 >>>>>>>>>>>>>>>>>>>>>>>>');

const { getRandomNumber } = require('../utils/MathHelper.js');


//let n = getRandomNumber(1,10); 
let n = 5;
let result = 1;

for(let i = n ; i > 1  ; i--){
    result *= i;
}

console.log(result);

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 7 >>>>>>>>>>>>>>>>>>>>>>>>');

 // const { getRandomNumber } = require('./../utils/MathHelper.js');

let attempts = 0;
let randomNo = 0;

do{
    randomNo = getRandomNumber(1,100);
    attempts++;
}while (randomNo % 5 !== 0)

    console.log(`The Random numner is ${randomNo} and it took ${attempts}
attempts to generate it.`);


console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 8 >>>>>>>>>>>>>>>>>>>>>>>>');


const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(...countries.sort());

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 9 >>>>>>>>>>>>>>>>>>>>>>>>');

const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);

let expected_result = false
for(let i = 0 ; i < cartoonDogs.length ; i++){
        if(cartoonDogs[i] === 'Pluto') expected_result = true;
       
}

  console.log(expected_result);


  console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 10 >>>>>>>>>>>>>>>>>>>>>>>>');


  const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];


  let reslt = cartoonCats.includes('Garfield') && cartoonCats.includes('Felix');
   
  console.log(cartoonCats);
  console.log(reslt);


  console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 11 >>>>>>>>>>>>>>>>>>>>>>>>');

  const numbers = [10.5, 20.75, 70, 80, 15.75];

  console.log(numbers);
  numbers.forEach((x) => console.log(x));


  console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 12 >>>>>>>>>>>>>>>>>>>>>>>>');

  const backPack = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']

  let counterBP = 0;
  let counterBookAndPen = 0;

  for(let object of backPack){

    object = object.toLowerCase();

    if(object.startsWith('b') || object.startsWith('p')){
        counterBP++;
    }
    if(object.includes('book') || object.includes('pen')){
        counterBookAndPen++;
    }
  }

  console.log(backPack);
  console.log(`Elements starting with 'B' or 'P' = ${counterBP}`);
  console.log(`Elements elements having 'book' or 'pen' = ${counterBookAndPen}`);


  console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 13 >>>>>>>>>>>>>>>>>>>>>>>>');

  const arrOfNumbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

  let moreThan10 = 0;
  let lessThan10 = 0;
  let are10  = 0;

  for(const number of arrOfNumbers){
    if(number > 10){
        moreThan10++;
    }else if(number < 10){
        lessThan10++;
    }else{
        are10++
    }
  }

  console.log(arrOfNumbers);
  console.log(`Elements that are more than 10 = ${moreThan10}`);
  console.log(`Elements that are less than 10 = ${lessThan10}`);
  console.log(`Elements are 10 = ${are10}`);


  console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 14 >>>>>>>>>>>>>>>>>>>>>>>>');

  const firstArrNumbers = [5, 8, 13, 1, 2];
  const secondArrNumbers = [9, 3, 67, 1, 0];


  console.log(firstArrNumbers);
  console.log(secondArrNumbers);

  const newArrNumbers = [];

  for(let i = 0 ; i < firstArrNumbers.length ; i++){
    if(firstArrNumbers[i] > secondArrNumbers[i]){
        newArrNumbers.push(firstArrNumbers[i])
    }else{
        newArrNumbers.push(secondArrNumbers[i]);
    }
  }

  console.log(newArrNumbers);


  console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 15 >>>>>>>>>>>>>>>>>>>>>>>>');


  function firstDuplicate(array){


     for(let i = 0 ; i < array.length ; i++){
        for(let j = i + 1 ; j < array.length ; j++){
           if(array[i] === array[j]){
              return array[i];
              break;
           }
        }
     }
       return -1;
  }

  console.log(firstDuplicate([3, 7, 10, 0, 3, 10 ]));
  console.log(firstDuplicate([5, 7, 7, 0, 5, 10 ]));
  console.log(firstDuplicate([5, '5', 3, 7, 4,]));
  console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));


  console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 16 >>>>>>>>>>>>>>>>>>>>>>>>');

const getDuplicates = (arrOfNumbers) => {

    let result = [];

    for(let i = 0 ; i < arrOfNumbers.length ; i++){
        for(let j = i + 1 ; j < arrOfNumbers.length ; j++){
           if(arrOfNumbers[i] === arrOfNumbers[j] && !result.includes(arrOfNumbers[i])){
                  result.push(arrOfNumbers[i]);
           }
        }
     }
       return result;
  }


console.log(getDuplicates([0, -3, -7, 0, 5, 10, 45, -7, 0]));


console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 17 >>>>>>>>>>>>>>>>>>>>>>>>');


const reverseStringWords = ( str ) => {
    const strArr = str.trim().split(' ').map( x => x.split('').reverse().join(''))
    
    return strArr.join(' ');
    
}

console.log(reverseStringWords('Hello World'));

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 18 >>>>>>>>>>>>>>>>>>>>>>>>');

const getEvens = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    const expected_arr = [];

    for(let i = min ; i <= max; i++){
        if(i % 2 === 0){
            expected_arr.push(i);
        }
    }
    return expected_arr;
}

console.log(getEvens(2, 7));

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 19 >>>>>>>>>>>>>>>>>>>>>>>>');

const getMultipleOf5 = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    const expected_arr = [];

    for(let i = min ; i <= max; i++){
        if(i % 5 === 0){
            expected_arr.push(i);
        }
    }
    return expected_arr;
}

console.log(getMultipleOf5(3, 17));

console.log('<<<<<<<<<<<<<<<<<<<<<< TASK 20 >>>>>>>>>>>>>>>>>>>>>>>>');

const fizzBuzz =  (num1, num2) => {

    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let arr = [];

    for(let i = min ; i <= max ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('FizzBuzz');
        }else if (i % 3 === 0){
            arr.push('Fizz');
        }else if(i % 5 === 0){
            arr.push('Buzz');
        }else{
            arr.push(i);
        }
    }

    return arr.join(' | ');
    
}

 console.log(fizzBuzz(13, 18));


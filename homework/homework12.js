console.log('<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>')
function makeNegative( num ){
    
   return num > 0 ? num * -1 : num
}

console.log(makeNegative(10));
console.log(makeNegative(0.45));

console.log('<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>')

function isSumoEvenOrOdd( n1, n2, n3){
  
    const num = n1 + n2 + n3;

    return num % 2 === 0 ? 'even' : 'odd';

}

console.log(isSumoEvenOrOdd(0, 1, 4));
console.log(isSumoEvenOrOdd(0, -1, -5));

console.log('<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>')

function decimal2( arrOfNums){

    const newArrOfNums = [];

    for(let num of arrOfNums){
        newArrOfNums.push(num.toFixed(2));
    }

    return newArrOfNums;

}

function decimal3( arrOFNums ){
    return arrOFNums.map(( num ) => num.toFixed(2));
}

console.log(decimal2( [94.356, 8.9752] ));
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ) );

console.log(decimal3( [94.356, 8.9752] ));
console.log(decimal3( [20987, 3.53245, 12.345, 32.9] ) );

console.log('<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>')

function myPow( n1, n2){
    if(n1 === 0 && n2 === 0) return 1;
    if(n2 === 1) return n1;

    let result = 1;

    for (let i = 0 ; i < n2 ; i++){
        result *= n1;
    }

    return result;

}

console.log(myPow(3, 3));
console.log(myPow(10, 1));
console.log(myPow(100, 0));
console.log(myPow(1, 1));
console.log(myPow(0, 0));

console.log('<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>')

function findLongestWord( word ){

    if(word.trim() === '') return '';

    const words = word.trim().split(' ');

    return words.reduce((longest, current) =>{
       return current.length > longest.length ? current : longest
    });
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord(""))
console.log(findLongestWord("     "))
console.log(findLongestWord("One two ten"))




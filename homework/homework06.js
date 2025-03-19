console.log('<<<<<<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>>>>>>');

const noSpace =  ( str ) => {
 // return str.replace(/\s+/g, '');
    return str.replaceAll(' ', '');
} 

console.log(noSpace(' B ana na'));

console.log('<<<<<<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>>>>>>');

const replaceFirstLast = ( str ) => {
    
    return str[str.length -1]  + str.slice(1, -1) + str[0];
}

console.log(replaceFirstLast('Hello'));

console.log('<<<<<<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>>>>>>');

const hasVowel = ( str ) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').some(char => vowels.includes(char));

}

console.log(hasVowel(''));
console.log(hasVowel('JavaScript'));


console.log('<<<<<<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>>>>>>');

const checkAge = ( yearOfBirth ) => {
    const currentYear = 2025;
    const age = currentYear - yearOfBirth;

    if(age > 120 || yearOfBirth > currentYear) return'AGE IS NOT VALID';
    if(age < 16) return'AGE IS NOT ALLOWED';
    else return'AGE IS ALLOWED';
    
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));



console.log('<<<<<<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>>>>>>');

const avarageOfEdges = ( n1, n2, n3 ) => {
    const max = Math.max( n1, n2, n3 );
    const min = Math.min( n1, n2, n3 );

    return (max + min ) / 2
}

console.log(avarageOfEdges(0, 0, 0));
console.log(avarageOfEdges(0, 0, 6));

console.log('<<<<<<<<<<<<<<<< TASK 6 >>>>>>>>>>>>>>>>>>>>');

const noA = ( arrOfStr ) => {

    const newArrOfStr = arrOfStr.map(( word ) => word.toLowerCase().startsWith('a') ? '###' : word);
    return newArrOfStr
}

console.log(noA(['javascript', 'hello', '123', 'xyz']));
console.log(noA(['apple', '123', 'ABC','javascript']));

console.log('<<<<<<<<<<<<<<<< TASK 7 >>>>>>>>>>>>>>>>>>>>');

const no3and5 = ( arrOfNumbers) => {
    return arrOfNumbers.map(number => {

        if (number % 3 === 0 && number % 5 === 0) return 101;
        if (number % 3 === 0) return 100;
        if (number % 5 === 0) return 99;

        return number;
    });
};

console.log(no3and5([7, 4, 11, 23, 17])); 
console.log(no3and5([3, 4, 5, 6]));     
console.log(no3and5([10, 11, 12, 13, 14, 15]));

console.log('<<<<<<<<<<<<<<<< TASK 8 >>>>>>>>>>>>>>>>>>>>');

const countPrimes = ( arrOfNumbers ) => arrOfNumbers.reduce((count, num) => {
    if (num < 2) return count;  
    for (let i = 2; i <= Math.sqrt(num); i++) {  
        if (num % i === 0) return count; 
    }
    return count + 1;
}, 0);

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));

console.log('<<<<<<<<<<<<<<<< TASK 9 >>>>>>>>>>>>>>>>>>>>');

const removeDuplicates = ( arr ) => arr.filter((item, index) => arr.indexOf(item) === index);


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

console.log('<<<<<<<<<<<<<<<< TASK 10 >>>>>>>>>>>>>>>>>>>>');

const isDateFormatValid = ( date ) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test( date.trim() ); 
};

console.log(isDateFormatValid(""));
console.log(isDateFormatValid("15/30/2020"));
console.log(isDateFormatValid("10-30-2020"));

console.log('<<<<<<<<<<<<<<<< TASK 11 >>>>>>>>>>>>>>>>>>>>');

const secondMax =  ( arrOfNum ) => {

  const arr =  removeDuplicates( arrOfNum );
  const newArr = arr.sort((a, b ) => b - a);

  return newArr[1];
  
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));

console.log('<<<<<<<<<<<<<<<< TASK 12 >>>>>>>>>>>>>>>>>>>>');

const secondMin =  ( arrOfNum ) => {

  const arr =  removeDuplicates( arrOfNum );
  const newArr = arr.sort((a, b ) => a - b);

  return newArr[1];
  
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));

console.log('<<<<<<<<<<<<<<<< TASK 13 >>>>>>>>>>>>>>>>>>>>');

const mostRepeated = ( arr ) => arr.filter((item, index) => arr.indexOf(item) !== index);


console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(['pen', 'pencil', 'pen', '123', 'abc', 'pen', 'pencil']));











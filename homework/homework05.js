console.log('<<<<<<<<<<<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>>>>>>>');

const countPos = ( arrOfNum ) => {
    const result = arrOfNum.filter((x) => x > 0 );
    return result.length;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
// countPos([-23, -4, 0, 2, 5, 90, 123]); 	
// countPos([0, -1, -2, -3]); 		

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>>>>>>>');

const countA = ( str ) => {
   return str.split('').reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc +1 : acc, 0); 
}

console.log(countA('BanAna'));

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>>>>>>>');

const countVowels = ( str ) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((acc, curr) => vowels.includes(curr) ? acc + 1 : acc, 0);
}

console.log(countVowels('Hello'));

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>>>>>>>');

const countConsonant =  ( word ) => {

    const vowels = ['a', 'e', 'i', 'o', 'u']; 
    return word.toLowerCase().split('').reduce((acc, curr) => !vowels.includes(curr) ? acc +1 : acc , 0);
}

console.log(countConsonant('Hello'));


console.log('<<<<<<<<<<<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>>>>>>>');

const countWords = ( arg ) => arg.trim().split(' ').length

console.log(countWords('   Javascript is fun   '));

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 6 >>>>>>>>>>>>>>>>>>>>>');

const factorial = ( number ) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));



console.log('<<<<<<<<<<<<<<<<<<<<< TASK 7 >>>>>>>>>>>>>>>>>>>>>');

const isPalindrome = ( word ) => {
     const word2 = word.toLowerCase().split('').reverse().join('');
     return word.toLowerCase() === word2;
}

console.log(isPalindrome('Kayak'));
console.log(isPalindrome('Hello'));

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 8 >>>>>>>>>>>>>>>>>>>>>');

const countMultipleWords = ( arr ) => {

    return arr.reduce(( acc, curr ) => { 
        return curr.trim().includes(' ') ? acc + 1 : acc }, 0);

}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); 	


console.log('<<<<<<<<<<<<<<<<<<<<< TASK 9 >>>>>>>>>>>>>>>>>>>>>');

const count3OrLess = ( word ) => {
    return word.split(' ').reduce(( acc, curr ) => {
        return curr.length < 3 ? acc + 1 : acc
    }, 0);
}

console.log(count3OrLess('Hello'));
console.log(count3OrLess('Hi John'));

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 10 >>>>>>>>>>>>>>>>>>>>>');

const isPrime = ( number ) => {
    if(number < 2) return false;
    return number / number === 1 && number /  1 === number
}

console.log(isPrime(-1));
console.log(isPrime(5));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(-5));
console.log(isPrime(0));

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 11 >>>>>>>>>>>>>>>>>>>>>');

const add = ( arrOfNum1, arrOfNum2 ) => {
    const result = [];
    const maxLengtArr = Math.max( arrOfNum1.length, arrOfNum2.length );

    for (let i = 0; i < maxLengtArr; i++){
         let num1 = arrOfNum1[i] || 0;
         let num2 = arrOfNum2[i] || 0;
         result.push(num1 + num2)
    }
    return result;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 12 >>>>>>>>>>>>>>>>>>>>>');

const removeExtraSpaces = ( word ) => {
    return word.trim().split(/\s+/).join(' ');
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 13 >>>>>>>>>>>>>>>>>>>>>');

const  findClosestTo10 = ( arrOfNum ) => {
    


}

console.log('<<<<<<<<<<<<<<<<<<<<< TASK 14 >>>>>>>>>>>>>>>>>>>>>');

const isEmailValid = ( email ) => {
    if(email.includes(' ')) return false;

    let counter = 0 
    for( let i = 0 ; i < email.length ; i++ ){
        if(email[i] === '@'){
            counter++;
        }
    }
    if(counter !==1 ) return false;

    const emailPattern = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));


console.log('<<<<<<<<<<<<<<<<<<<<< TASK 15 >>>>>>>>>>>>>>>>>>>>>');


const isPasswordValid = ( str ) => {

if( str.includes(' ') ) return false;

if( str.length < 8 && str.length > 16  ) return false;

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/

return regex.test(str);


}

console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));

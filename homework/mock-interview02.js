console.log('<<<<<<<< Mock Interview Task 1 >>>>>>>>>>');

const doubleOrTripleWord = ( str ) => {
    if(str.length % 2 === 0){
        return str + str + str; 
    }else{
        return str.repeat(2);
    }
}

console.log(doubleOrTripleWord('Tech'))


console.log('<<<<<<<< Mock Interview Task 2 >>>>>>>>>>');

const firstAndLast = ( str ) => {

    const arr = str.split(' ');

    return arr[arr.length -1] + arr[0];
}

console.log(firstAndLast('Hello World'));

console.log('<<<<<<<< Mock Interview Task 3 >>>>>>>>>>');

const hasVowel = ( str ) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').some(char => vowels.includes(char));

}

console.log(hasVowel(''));
console.log(hasVowel('JavaScript'));

console.log('<<<<<<<< Mock Interview Task 4 >>>>>>>>>>');

const startVowel = ( str ) => {
  str = str.trim().toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let firstChar = str[0];

   return vowels.includes(firstChar)

}

console.log(startVowel("Hello"));    // false
console.log(startVowel("Apple"));    // true
console.log(startVowel("orange"));   // true
console.log(startVowel(""));         // false
console.log(startVowel(" "));        // false
console.log(startVowel("123"));  

console.log('<<<<<<<< Mock Interview Task 5 >>>>>>>>>>');

const avarageOfEdges = ( n1, n2, n3 ) => {
    const max = Math.max( n1, n2, n3 );
    const min = Math.min( n1, n2, n3 );

    return (max + min ) / 2
}

console.log(avarageOfEdges(0, 0, 0));
console.log(avarageOfEdges(0, 0, 6));

console.log('<<<<<<<< Mock Interview Task 6 >>>>>>>>>>');

const replaceFirstLast = ( str ) => {

    str = str.trim();

    if(str.length < 2) return '';
    
    return str[str.length -1]  + str.slice(1, -1) + str[0];
}


console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Hi'));

console.log('<<<<<<<< Mock Interview Task 7 >>>>>>>>>>');

const swap4 = ( str ) => {
   if(str.length < 8) return '';

   return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
}

console.log(swap4("abc"));         // ""
console.log(swap4("JavaScript"));  // "riptScJava"
console.log(swap4("TechGlobal"));  // "obalGlTech"
console.log(swap4(""));            // ""
console.log(swap4(" "));           // 

console.log('<<<<<<<< Mock Interview Task 8 >>>>>>>>>>');

const swapFirstAndLastWord = ( str ) => {
    const arrOfstr = str.trim().split(' ');

    if(arrOfstr.length < 2) return '';

    const first = arrOfstr[0];
    const last = arrOfstr[arrOfstr.length -1]

    arrOfstr[0] = last;
    arrOfstr[arrOfstr.length -1 ] = first;

    return arrOfstr.join(' ');

}

console.log(swapFirstAndLastWord("Hello World"));           // "World Hello"
console.log(swapFirstAndLastWord("I like JavaScript"));     // "JavaScript like I"
console.log(swapFirstAndLastWord("foo bar foo bar"));       // "bar bar foo foo"
console.log(swapFirstAndLastWord("Hello"));                 // ""
console.log(swapFirstAndLastWord("     "));   


console.log('<<<<<<<< Mock Interview Task 9 >>>>>>>>>>');


const countPos = ( arrOfNum ) => {
    const result = arrOfNum.filter((x) => x > 0 );
    return result.length;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
// countPos([-23, -4, 0, 2, 5, 90, 123]); 	
// countPos([0, -1, -2, -3]); 

console.log('<<<<<<<< Mock Interview Task 10 >>>>>>>>>>');

const getEvens = ( n1, n2 ) => {
    const max = Math.max(n1, n2);
    const min = Math.min(n1, n2);
    const evens = [];

    for(let i = min ; i <= max ; i++){
        if(i % 2 === 0){
          evens.push(i);
        }
         
    }

    return evens;

}

console.log(getEvens(2, 7));    // [2, 4, 6]
console.log(getEvens(17, 5));   // [6, 8, 10, 12, 14, 16]
console.log(getEvens(4, 4));    // [4]
console.log(getEvens(3, 3));    // []


console.log('<<<<<<<< Mock Interview Task 11 >>>>>>>>>>');

const getMultipleOf5 = ( n1, n2 ) => {
    const max = Math.max(n1, n2);
    const min = Math.min(n1, n2);
    const multiples = [];

    for(let i = min ; i <= max ; i++){
        if(i % 5 === 0){
          multiples.push(i);
        }
         
    }

    return n1 > n2 ? multiples.reverse() : multiples;

}

console.log(getMultipleOf5(3, 17));    // [5, 10, 15]
console.log(getMultipleOf5(23, 5));    // [20, 15, 10, 5]
console.log(getMultipleOf5(5, 5));     // [5]
console.log(getMultipleOf5(2, 4));     // []


console.log('<<<<<<<< Mock Interview Task 12 >>>>>>>>>>');


const countNeg = ( arrOfNum ) => {
    const result = arrOfNum.filter((x) => x < 0 );
    return result.length;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); 	
console.log(countNeg([0, -1, -2, -3])); 

console.log('<<<<<<<< Mock Interview Task 13 >>>>>>>>>>');

const countA = ( str ) => {
    return str.split('').reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc + 1 : acc, 0); 
 }
 
 console.log(countA('BanAna'));

 console.log('<<<<<<<< Mock Interview Task 14 >>>>>>>>>>');

 const countWords = ( arg ) => arg.trim().split(' ').length

console.log(countWords('   Javascript is fun   '));


console.log('<<<<<<<< Mock Interview Task 15 >>>>>>>>>>');

const factorial = ( number ) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

console.log('<<<<<<<< Mock Interview Task 16 >>>>>>>>>>');

const count3OrLess = ( str ) => {

    return str.trim().split(' ').reduce(( acc, cur ) => {
        return cur.length <= 3 ? acc + 1 : acc;
    }, 0)
}

console.log(count3OrLess("Hello"));                // 0
console.log(count3OrLess("Hi John"));              // 1
console.log(count3OrLess("JavaScript is fun"));    // 2
console.log(count3OrLess("My name is John Doe"));  // 3
console.log(count3OrLess(""));   


console.log('<<<<<<<< Mock Interview Task 17 >>>>>>>>>>');

const removeExtraSpaces  = ( str ) => {
    const words = str.trim().split(' ').filter( word => word !== '' );

    return words.join(' ');

    // return str.trim().split(/\s+/).join(' ');


}

console.log(removeExtraSpaces("Hello"));                  // "Hello"
console.log(removeExtraSpaces(" Hello World "));          // "Hello World"
console.log(removeExtraSpaces(" JavaScript  is   fun"));  // "JavaScript is fun"
console.log(removeExtraSpaces(""));  


console.log('<<<<<<<< Mock Interview Task 18 >>>>>>>>>>');


const middleInt = ( n1, n2, n3 ) => {
    const arrOfnum = [n1 , n2 , n3];
    
    const newArrOfnum = arrOfnum.sort((a, b) => b - a );
 
    return newArrOfnum[1];
    
 }
 
 console.log(middleInt(1, 2, 2));     // 2
 console.log(middleInt(5, 5, 8));     // 5
 console.log(middleInt(5, 3, 5));     // 5
 console.log(middleInt(1, 1, 1));     // 1
 console.log(middleInt(-1, 25, 10));  // 10

 console.log('<<<<<<<< Mock Interview Task 19 >>>>>>>>>>');

 const firstDuplicate = ( arr ) => {
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){
           if(arr[i] === arr[j]){
              return arr[i];
            
           }
        }
     }
       return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));           // 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));            // 5
console.log(firstDuplicate([5, '5', 3, 7, 4]));              // -1
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc'])); // 'abc'
console.log(firstDuplicate([1, 2, 3]));                      // -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar'])); 

console.log('<<<<<<<< Mock Interview Task 20 >>>>>>>>>>');

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

console.log('<<<<<<<< Mock Interview Task 21 >>>>>>>>>>');

const countVowels = ( str ) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.toLowerCase().split('').reduce((count, char) => {
        return vowels.includes( char ) ? count + 1 : count
    }, 0);
}

console.log(countVowels("Hello"));                // 2
console.log(countVowels("JavaScript is fun"));    // 5
console.log(countVowels(""));                     
 

console.log('<<<<<<<< Mock Interview Task 22 >>>>>>>>>>');

const reverseStringWords = ( str ) => {
    const strArr = str.trim().split(' ').map( x => x.split('').reverse().join(''));
    
    return strArr.join(' ');
    
}

console.log(reverseStringWords('Hello World'));

console.log('<<<<<<<< Mock Interview Task 23 >>>>>>>>>>');

const countConsonant =  ( word ) => {

    const vowels = ['a', 'e', 'i', 'o', 'u']; 
    return word.toLowerCase().split('').reduce((acc, curr) => !vowels.includes(curr) ? acc +1 : acc , 0);
}

console.log(countConsonant('Hello'));          
console.log(countConsonant("JavaScript is fun"));
console.log(countConsonant("")); 

console.log('<<<<<<<< Mock Interview Task 24 >>>>>>>>>>');

const countMultipleWords = ( arr ) => {

    return arr.reduce(( acc, curr ) => { 
        return curr.trim().includes(' ') ? acc + 1 : acc }, 0);

}

// Test cases
console.log(countMultipleWords(["foo", "", " ", "foo bar", " foo", '   FDS sdgsdg  ']));           // -> 1
console.log(countMultipleWords(["foo", "bar", "foobar", " foobar "]));         // -> 0
console.log(countMultipleWords(["f o o", "b a r", "foo bar", " foo bar "]));    // -> 4
console.log(countMultipleWords([])); // 0

const countMultipleWords1 = (arr) => {
  return arr
    .filter(str => str.trim().includes(' ')) // filter strings with multiple words
    .reduce(count => count + 1, 0);           // count them
};

// Test cases
console.log(countMultipleWords1(["foo", "", " ", "foo bar", " foo", '   FDS sdgsdg  ']));           // -> 1
console.log(countMultipleWords1(["foo", "bar", "foobar", " foobar "]));         // -> 0
console.log(countMultipleWords1(["f o o", "b a r", "foo bar", " foo bar "]));    // -> 4
console.log(countMultipleWords1([])); // 0

console.log('<<<<<<<< Mock Interview Task 25 >>>>>>>>>>');

function fizzBuzz(num1, num2) {
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    const result = [];
  
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push('FizzBuzz');
      } else if (i % 3 === 0) {
        result.push('Fizz');
      } else if (i % 5 === 0) {
        result.push('Buzz');
      } else {
        result.push(i);
      }
    }
  
    return result.join(' | ');
  }
  
  // Example usage:
  console.log(fizzBuzz(13, 18));  // "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
  console.log(fizzBuzz(12, 5));   // "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
  console.log(fizzBuzz(5, 5));    // "Buzz"
  console.log(fizzBuzz(9, 6));    // "Fizz | 7 | 8 | Fizz"

  console.log('<<<<<<<< Mock Interview Task 26 >>>>>>>>>>');


const isPalindrome = ( word ) => {
    const word2 = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === word2;
}

console.log(isPalindrome('Kayak'));
console.log(isPalindrome('Hello'));

console.log('<<<<<<<< Mock Interview Task 27 >>>>>>>>>>');

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

console.log('<<<<<<<< Mock Interview Task 28 >>>>>>>>>>');

function add(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];
  
    for (let i = 0; i < maxLength; i++) {
      const num1 = arr1[i] || 0;
      const num2 = arr2[i] || 0;
      result.push(num1 + num2);
    }
  
    return result;
  }
  
  // Example usage:
  console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));                   // [9, 3, 2, 7, 5, 10]
  console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // [16, 11, 9, 3, 2, 7, 5, 10, 34]
  console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); 
  
  
  console.log('<<<<<<<< Mock Interview Task 29 >>>>>>>>>>');

  const noA = ( arrOfStr ) => {

    const newArrOfStr = arrOfStr.map(( word ) => word.toLowerCase().startsWith('a') ? '###' : word);
    return newArrOfStr
}

console.log(noA(['javascript', 'hello', '123', 'xyz']));
console.log(noA(['apple', '123', 'ABC','javascript']));

console.log('<<<<<<<< Mock Interview Task 30 >>>>>>>>>>');

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


console.log('<<<<<<<< Mock Interview Task 31 >>>>>>>>>>');


function no13(arr) {
    return arr.map(num => num === 13 ? 0 : num);
  }
  
  console.log(no13([1, 2, 3 ,4]));              // [1, 2, 3, 4]
  console.log(no13([13, 2, 3]));               // [0, 2, 3]
  console.log(no13([13, 13, 13 , 13, 13]));    // [0, 0, 0, 0, 0]
  console.log(no13([]));   

  console.log('<<<<<<<< Mock Interview Task 32 >>>>>>>>>>');

const removeDuplicates = ( arr ) => arr.filter((item, index) => arr.indexOf(item) === index);


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

console.log('<<<<<<<< Mock Interview Task 33 >>>>>>>>>>');

const noDigit = ( str ) => {
    return str.split('').filter(( char ) => !( char >= '0' && char <='9' )).join('');
}

console.log(noDigit(""));                   // ""
console.log(noDigit("Javascript"));         // "Javascript"
console.log(noDigit("123Hello"));           // "Hello"
console.log(noDigit("123Hello World149"));  // "Hello World"
console.log(noDigit("123Tech456Global149")); // "TechGlobal"

console.log('<<<<<<<< Mock Interview Task 34 >>>>>>>>>>');

function noVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str
      .split('')
      .filter(char => !vowels.includes(char.toLowerCase()))
      .join('');
  }
  
  // Example usage:
  console.log(noVowel("TechGlobal"));    // "TchGlbl"
  console.log(noVowel("AEOxyz"));        // "xyz"
  console.log(noVowel("Javascript"));    // "Jvscrpt"
  console.log(noVowel(""));              // ""
  console.log(noVowel("125$"));          // "125$"


  console.log('<<<<<<<< Mock Interview Task 35 >>>>>>>>>>');


  function sumOfDigits(str) {
    return str
      .split('')
      .filter(char => !isNaN(char) && char !== ' ')
      .reduce((sum, char) => sum + Number(char), 0);
  }
  
  // Example usage:
  console.log(sumOfDigits("Javascript"));         // 0
  console.log(sumOfDigits("John’s age is 29"));   // 11
  console.log(sumOfDigits("$125.0"));  

  console.log('<<<<<<<< Mock Interview Task 36 >>>>>>>>>>');

  function arrFactorial(arr) {
    // Helper function to calculate factorial
    const factorial = (n) => {
      if (n === 0 || n === 1) return 1;
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    };
  
    // Map each number to its factorial
    return arr.map(num => factorial(num));
  }
  
  // Example usage:
  console.log(arrFactorial([1, 2, 3 ,4]));   // [1, 2, 6, 24]
  console.log(arrFactorial([0, 5]));        // [1, 120]
  console.log(arrFactorial([5 , 0, 6]));    // [120, 1, 720]
  console.log(arrFactorial([]));            // []
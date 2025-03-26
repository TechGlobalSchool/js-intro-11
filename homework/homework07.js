console.log('<<<<<<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>>>>>>>>');

function hasUpperCase( str ) {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char >= 'A' && char <= 'Z') {
        return true;
      }
    }
    return false;
  }

console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John"));       // true
console.log(hasUpperCase("$125.0"));     // false
console.log(hasUpperCase(""));           // false

console.log('<<<<<<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>>>>>>>>');

const noDigit = ( str ) => {
    return str.split('').filter(( char ) => !( char >= '0' && char <='9' )).join('');
}

console.log(noDigit(""));                   // ""
console.log(noDigit("Javascript"));         // "Javascript"
console.log(noDigit("123Hello"));           // "Hello"
console.log(noDigit("123Hello World149"));  // "Hello World"
console.log(noDigit("123Tech456Global149")); // "TechGlobal"


console.log('<<<<<<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>>>>>>>>');

const noVowel = ( str ) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
    .toLowerCase()
    .split('')
    .filter(( char ) => !vowels.includes( char ))
    .join('');
}

console.log(noVowel("TechGlobal"));   // "TchGlbl"
console.log(noVowel("AEOxyz"));       // "xyz"
console.log(noVowel("Javascript"));   // "Jvscrpt"
console.log(noVowel(""));             // ""
console.log(noVowel("125$"));   

console.log('<<<<<<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>>>>>>>>');

const no13 = ( arrOfNum ) => {
    return arrOfNum.reduce(( acc, num ) => {
        acc.push( num === 13 ? 0 : num )
        return acc;
    }, []);
}

console.log(no13([1, 2, 3, 4 ,13]))



console.log('<<<<<<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>>>>>>>>');

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

console.log('<<<<<<<<<<<<<<<< TASK 6 >>>>>>>>>>>>>>>>>>>>>>');

const sumOfDigits = str => {

    const arrOfnumber =  str.split('').filter(char => char >= '0' && char <= '9' )
    return arrOfnumber.reduce(( acc, num )  => {
        return acc += Number(num);
    }, 0 );
}

console.log(sumOfDigits('Johns age is 29'));


console.log('<<<<<<<<<<<<<<<< TASK 7 >>>>>>>>>>>>>>>>>>>>>>');

const factorial = n => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };
  
  const arrFactorial = arr => arr.map(factorial);
  

  console.log(arrFactorial([0, 5])); 

  console.log('<<<<<<<<<<<<<<<< TASK 8 >>>>>>>>>>>>>>>>>>>>>>');
  
  const categorizeCharacters = word => {
  
    let letters =  '';
    let digits = '';
    let specials = '';
  
    for (let char of word ){

        char = char.toLowerCase();
        
        if(char >= 'a' && char <= 'z') letters += char;
        else if(char >= '0' && char <= '9') digits += char;
        else specials += char;
    }
   
    return [ letters, digits, specials ]

  }

console.log(categorizeCharacters("1234"));         // [ '', '1234', '' ]
console.log(categorizeCharacters("abc123$#%"));    // [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%"));    // [ 'abc', '123', '$%%' ]



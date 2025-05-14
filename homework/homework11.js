console.log('<<<<<<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>>');

function countPalindrome(str) {
    const strArr = str.split(' ');
  
    return strArr.reduce((count, el) => {
      if( el === '' ) return count;  
      el = el.toLowerCase();
      const reversed = el.split('').reverse().join('');
      return el === reversed ? count + 1 : count;
    }, 0);
  }
  

console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome(""));
console.log(countPalindrome("No palindrome here"));

console.log('<<<<<<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>>');

function sum ( arrOFNum, bool ){
   
    return arrOFNum.map((num, index) => {
        return (bool && index % 2 === 0) ? num : 0;
    })
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sum([1, 5, 10], true));
console.log(sum([3, 7, 2, 5, 10], false));
console.log(sum([-1, 1, -2, 2], true));
console.log(sum([0, -1, 15, 1], false));
console.log(sum([1, 2, 3, 4, -4], true));

console.log('<<<<<<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>>');

function nthChars( str, n ) {
  let result = "";

  for (let i = n - 1; i < str.length; i += n) {
    result += str[i];
  }

  return result;
}

console.log(nthChars("Java", 2));
console.log(nthChars("JavaScript", 5));

console.log('<<<<<<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>>');

function canFormString(str1, str2) {
  const source = str1.replace(/\s/g, '').split('').sort();
  const target = str2.replace(/\s/g, '').split('').sort();

  let i = 0, j = 0;

  while (i < source.length && j < target.length) {
    if (source[i] === target[j]) {
      j++;
    }
    i++;
  }

  return j === target.length;
}

console.log(canFormString('Hello', 'Hi'));
console.log(canFormString('programming', 'gaming'));

console.log('<<<<<<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>>');

function isAnagram( str1, str2 ){
   
  const anagram = ( str ) =>  str.replace(/\s/g, '').toLowerCase().split('').sort().join('');

  return anagram( str1 ) === anagram( str2 );

}

console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("listen", "silent"));

console.log('<<<<<<<<<<<<<<<< TASK 6 >>>>>>>>>>>>>>>>');

function count( arrOfNum, bool ){
  
  let counter = 0;

  for(let num of arrOfNum){
     if(bool && num % 2 === 0){
      counter++;
     }else if (!bool && num % 2 !== 0){
      counter++;
     }
  }

  return counter;
  
} 

console.log(count([1, 5, 10], true));
console.log(count([3, 7, 2, 5, 10], false));

console.log('<<<<<<<<<<<<<<<< TASK 7 >>>>>>>>>>>>>>>>');


function sumDigitsDouble( str ) {

  let sum = 0;
  let foundDigit = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= '0' && char <= '9') {
      sum += Number(char);
      foundDigit = true;
    }
  }

  return foundDigit ? sum * 2 : -1;
}

console.log(sumDigitsDouble("Javascript"));
console.log(sumDigitsDouble("23abc45"));



console.log('<<<<<<<<<<<<<<<< TASK 8 >>>>>>>>>>>>>>>>');

   // I can not come up with the logic myself
   // I can not even read and understand this on AI
   // I would rather not submit the code
   // I am unable to read
   // No disrespect but. I have to work to manage my life at same time with school. 
   // I really do not have time to invest too much time on it.
   // I will work on it after watching your video to understand it.

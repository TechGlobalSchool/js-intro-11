console.log('<<<<<<<<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>>>>');

function haslowerCase( arg ){

  for(let char of arg){
    if(char >= 'a' && char <= 'z'){
        return true;
    }
  }
  return false;
}

console.log(haslowerCase(''));
console.log(haslowerCase('JAVASCRIPT'));
console.log(haslowerCase('hello'));
console.log(haslowerCase('125$'));
console.log(haslowerCase('    a    '));

console.log('<<<<<<<<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>>>>');

function noZero( arrOfNums ){
    return arrOfNums.filter(( num ) => num !== 0);
}

console.log(noZero([1])); 
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([0, 1, 10]));  

console.log('<<<<<<<<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>>>>');

function numberAndSquare( arrofNums ){
    return arrofNums.map(( num ) => [num, num * num]);
}

console.log(numberAndSquare([1, 2, 3])); 

console.log('<<<<<<<<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>>>>');

  function containsValue (arrOfargs, arg){
     return arrOfargs.includes(arg);
  }

  console.log(containsValue(['abc', 'foo', 'javascript'], 'hello'));
  console.log(containsValue(['abc', 'foo', 'javascript'], 'foo'));

  console.log('<<<<<<<<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>>>>');

 function reverseSentence ( arg ){
    const arrOfarg = arg.trim().toLowerCase().split(' ');
    if(arrOfarg.length < 2) return 'There is not enough words!'
    const reversedstr = arrOfarg.reverse().join(' ');
    return reversedstr[0].toUpperCase() + reversedstr.slice(1);


 }

 console.log(reverseSentence('Hello'));
 console.log(reverseSentence('Javascript is fun'));
 console.log(reverseSentence('This is sentence'));

 console.log('<<<<<<<<<<<<<<<<<< TASK 6 >>>>>>>>>>>>>>>>>>');

 function removeStringSpecialsDigits ( str ){
    return str.replace(/[^a-zA-Z\s]/g, '');
 }

 console.log(removeStringSpecialsDigits('123Javascript #$%is fun'));

 console.log('<<<<<<<<<<<<<<<<<< TASK 7 >>>>>>>>>>>>>>>>>>');

 function removeArraySpecialsDigits ( arr ){
    return arr.map( x  => x.replace(/[^a-zA-Z\s]/g, ''));
 }
 
 console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]))

 console.log('<<<<<<<<<<<<<<<<<< TASK 8 >>>>>>>>>>>>>>>>>>');

     function getCommons(arr1, arr2 ){
        return arr1.filter( x => arr2.includes(x));

     }

   console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"] ));
   console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) );

   console.log('<<<<<<<<<<<<<<<<<< TASK 9 >>>>>>>>>>>>>>>>>>');

    function noXInVariables ( arr ){
        return arr.filter ( x => {
            if(typeof x === 'string'){
                return x.toLowerCase().replace(/x/gi,'')
            } 

        });

    }

    console.log(noXInVariables(["abc", 123, "#$%"]));
    console.log(noXInVariables(["abc", 123, "#$%", 'x']));



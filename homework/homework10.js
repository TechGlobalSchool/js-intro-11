console.log('<<<<<<<<<<<<<<< TASK 1 >>>>>>>>>>>>>>>>');

const calculateTotalPrice1 = ( items ) => {
    const priceList = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    };

    let total = 0;

    for (const [item, quantity] of items) {
        if (priceList[ item ]) {
            total += priceList[ item ] * quantity;
        }
    }

    return total;
}

console.log(calculateTotalPrice1({apple: 3, mango: 1}));


console.log('<<<<<<<<<<<<<<< TASK 2 >>>>>>>>>>>>>>>>');

const calculateTotalPrice2 = ( items ) => {
    const priceList = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    };

    let total = 0;

    for (const [item, quantity] of items) {
        if (priceList[ item ]) {
            total += priceList[ item ] * quantity;
        }
    }

    return total;
}

console.log(calculateTotalPrice2({apple: 3, mango: 1}));


console.log('<<<<<<<<<<<<<<< TASK 3 >>>>>>>>>>>>>>>>');

function nthWord( str, num ) {
    const strArr = str.trim().split(' ');
    
    if(strArr.length < num ) return '';

    return strArr[ num - 1 ];
}

console.log(nthWord('I like programming languages', 2));
console.log(nthWord('', 1));

console.log('<<<<<<<<<<<<<<< TASK 4 >>>>>>>>>>>>>>>>');

function isAmstrong ( num ){
   const numbers = num.toString().split('');
   const sum = numbers.reduce(( acc, currNum ) => {
   return acc + Math.pow(Number( currNum ), numbers.length)
   }, 0);

   return sum === num;
}

console.log(isAmstrong( 153 ));
console.log(isAmstrong( 123 ));

console.log('<<<<<<<<<<<<<<< TASK 5 >>>>>>>>>>>>>>>>');

function reverseNumber ( num ){
    let reverseNum = 0
    while ( num ) {
        reverseNum = reverseNum * 10 + num % 10;
        num = Math.floor( num / 10 );
    }

    return reverseNum;
}

console.log(reverseNumber( 371 ));


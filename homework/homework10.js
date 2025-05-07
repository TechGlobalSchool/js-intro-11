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


    function calculateTotalPrice2(items) {
        const prices = {
            Apple: 2.00,
            Orange: 3.29,
            Mango: 4.99,
            Pineapple: 5.25
        };
    
        const quantities = {
            Apple: items.Apple || 0,
            Orange: items.Orange || 0,
            Mango: items.Mango || 0,
            Pineapple: items.Pineapple || 0
        };
    
        let appleCost = 0;
        for (let i = 1; i <= quantities.Apple; i++) {
            if (i % 2 === 0) { 
                appleCost += prices.Apple * 0.5;
            } else {
                appleCost += prices.Apple;
            }
        }
    
        let mangoCost = 0;
        let freeMangoes = 0;
        for (let i = 1; i <= quantities.Mango; i++) {
            if (i % 4 === 0) { 
               
                freeMangoes++;
            }
        }
        mangoCost = (quantities.Mango - freeMangoes) * prices.Mango;
    
        const orangeCost = quantities.Orange * prices.Orange;
        const pineappleCost = quantities.Pineapple * prices.Pineapple;
    
        const total = appleCost + mangoCost + orangeCost + pineappleCost;

        return Math.round(total * 100) / 100;
    }

    console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 }));
    console.log(calculateTotalPrice2({ Apple: 4, Orange: 3, Mango: 8 }));
    console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 }));
    console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }));
    

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

console.log('<<<<<<<<<<<<<<< TASK 6 >>>>>>>>>>>>>>>>');

function doubleOrTriple( numArr, bool) {
    
    return numArr.map((num ) => bool ? num * 2 : num * 3);
}

console.log(doubleOrTriple([1, 5, 10], true));
console.log(doubleOrTriple([3, 7, 2], false));


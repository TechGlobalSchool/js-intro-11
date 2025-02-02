/*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str1 = 'Hello';

// let res1 = str1.slice(str1.length - 5);
let res1 = str1.slice(-5);

console.log(res1);


/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str2 = 'JavaScript';

let res2 = str2.slice(0, 3) + str2.slice(-3);
console.log(res2);


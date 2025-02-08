let examScore = 59;

examScore >= 60 ? console.log('PASS') : console.log('FAIL');

console.log(examScore >= 60 ? 'PASS' : 'FAIL');

// Preferred
let result = examScore >= 60 ? 'PASS' : 'FAIL';
console.log(result);


let age = 65;
let retirementAllowed = age < 65 ? 'NO' : 'YES';

console.log(retirementAllowed);


let gender = 'female';
let fname = gender === 'female' ? 'Jane' : 'John';
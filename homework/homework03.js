const { CharacterHelper } = require('./../utils/CharacterHelper.js');

console.log(CharacterHelper.isDigit('5'));
console.log(CharacterHelper.isDigit('55'));


let str = 'Alex';

console.log(CharacterHelper.isVowel(str[0]));
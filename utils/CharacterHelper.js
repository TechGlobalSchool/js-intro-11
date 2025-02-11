/**
 * 
 * @param {*} char must be a single char
 * @returns true if the single character is a digit
 * @returns false if multiple characters provided
 */
function isDigit(char) {
  return /^\d$/.test(char);
}

function isLowerCase(char) {
  return /^[a-z]$/.test(char);
}

function isUpperCase(char) {
  return /^[A-Z]$/.test(char); 
}

function isLetter(char) {
  return isLowerCase(char) || isUpperCase(char);
}

function isSpace(char) {
  return char === ' ';
}

function isDigitOrLetter(char) {
  return isDigit(char) || isLetter(char);
}

function isSpecial(char){
  return !isDigitOrLetter(char) && !isSpace(char);
  // return /^[^a-zA-Z0-9\s]$/.test(char);
}

function isVowel(char) {
  return /^[aeoui]$/i.test(char);
}

// Store all in a single object and export your object
const CharacterHelper = {
  isDigit,
  isUpperCase,
  isLowerCase,
  isLetter,
  isSpace,
  isDigitOrLetter,
  isSpecial,
  isVowel
};

module.exports.CharacterHelper = CharacterHelper;



// Separate exporting statements
// module.exports.isDigit = isDigit;
// module.exports.isUpperCase = isUpperCase;
// module.exports.isLowerCase = isLowerCase;
// module.exports.isLetter = isLetter;
// module.exports.isSpace = isSpace;
// module.exports.isDigitOrLetter = isDigitOrLetter;
// module.exports.isSpecial = isSpecial;
// module.exports.isVowel = isVowel;
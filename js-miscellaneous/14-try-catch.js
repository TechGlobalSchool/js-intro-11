// Why we need try-catch 

try {
  console.log(fname);
}
catch(error) {
  console.log(`You have an error here: ${error}!!!`);
  console.log(`The error message is: ${error.message}!!!`);
}

console.log('Rest of the program!');
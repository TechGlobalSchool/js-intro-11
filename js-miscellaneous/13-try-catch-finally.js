try {
  // your code goes here
  // Runtime will always attempt to run this block
}
catch(error) {
  // your code to handle the error
  // will be executed ONLY if there is an error in the try block
}
finally {
  // your code to run regardless there is an error or not
}


try {
  // console.log('Hello', fname);
  console.log('Welcome!');
}
catch(err) {
  console.log('Caught an error!!!');
}
finally {
  console.log('Good Bye!');
}


try {
  console.log('Batch-11');
  const firstMonth = 'January';
  firstMonth = 'John'; // TypeError
} 
catch(error) {
  console.log(`An error occurred: ${error}`);
}
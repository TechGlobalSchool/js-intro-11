function any() {
  var var1 = 'Hello';
  let var2 = 'Hi';
  const var3 = 'Sunday';
  
  console.log(var1, var2, var3); // Hello Hi Sunday
}

console.log(var1); // ReferenceError: var1 is not defined
console.log(var2); // ReferenceError: var2 is not defined
console.log(var3); // ReferenceError: var3 is not defined
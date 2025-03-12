Math.max(2, 3); // 3
Math.max(3, 10, 6); // 10
Math.max(7, 2, 10, 15, 3, 2); // 15


function sum(...args) { // rest parameters collects all the arguments and stores in an array
  return args.reduce((acc, curr) => acc + curr, 0);
}


console.log(sum()); // 0
console.log(sum(5)); // 5
console.log(sum(5, 2)); // 7
console.log(sum(10, 5, 2)); // 17
console.log(sum(2, 1, 10, 5, 2, 10)); // 30
console.log(sum(2, 1, 10, 5, 2, 10, 3)); // 33
console.log(sum(2, 1, 10, 5, 2, 10, 3, 2, 1, 10, 5, 2, 10, 3)); // 66



function printArgs(...values) { // values = [ 'John', 3, null, undefined ]
  values.forEach(x => console.log(x));
}

printArgs('John', 3);


function greet(greet, ...values) {
  console.log(`${greet}, ${values}!`);
}

greet('Hi', 'John');
greet('Good morning', 'John', 'Jane');
greet('Hello', 'John', 'Jane', 'Mariia');



// Before ES6 - there was arguments object
// arguments object - array-like object

function product() {
  if(arguments.length === 0) return 0;
  let result = 1;
  for(const value of arguments) {
    result *= value;
  }
  return result;
}

console.log(product()); // 0
console.log(product(5)); // 5
console.log(product(5, 2)); // 10
console.log(product(5, 2, 4)); // 40
console.log(product(3, 5, 2, 4)); // 120
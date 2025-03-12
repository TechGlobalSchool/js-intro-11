function sum(num1, num2 = 0) { // default value for num1 and num2 is undefined
  return num1 + num2;
}

console.log(sum(3)); // 3
console.log(sum(2, 4)); // 6


function greet(name = 'my friend!', time = 'morning') {
  if(time === 'evening') console.log('Good evening', name);
  else console.log('Good morning', name);
}

greet('John', 'evening');
greet('Alex');
greet();
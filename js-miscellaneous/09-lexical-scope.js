function connect() {
  function greet(name) {
    console.log(`Hello ${name}!`);
  }

  return greet;
}

let result = connect();
result('Mariia');
result('Alex');





function program() {
  function print1() {
    console.log('1');
  }
  return print1;
}

const r1 = program();

r1();


// Lexical Scope: inner function can access the variables of outer function
// However, outer function CANNOT access the variables of inner function
function funcA() {
  let varA = 'A'; 

  function funcB() {
    let varB = 'B';
    console.log(varA); // accessible
    console.log(varB); // accessible
  }

  funcB();

  console.log(varA); // accessible
  console.log(varB); // not accessible - ReferenceError: varB is not defined
}

funcA();
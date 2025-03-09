// Global Scope
let name = 'John';

const cities = ['Rome', 'Berlin'];

const person = {
  fullname: 'John Doe',
  age: 45
};

const sayHi = () => console.log('Hi');

// Globally access these variables
console.log(cities);
console.log(name);
console.log(person);
sayHi();

// Locally access the variables
for(let i = 0; i < cities.length; i++) {
  console.log(sayHi(), cities[i]);
}

if(true) {
  cities.push('Chicago');
  sayHi();
}

function funcA() {
  sayHi();
}
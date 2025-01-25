const person = {
  fname: 'John',
  lname: 'Doe',
  age: 27
};

// John Doe will be 34 after 7 years;
let years = 7;

console.log(person.fname + ' ' + person.lname + ' will be ' + (person.age + years) + ' after ' + years + ' years.');

console.log(`${person.fname} ${person.lname} will be ${person.age + years} after ${years} years.`);



let price = 2.5;
let quantity = 10;

// The total price is = $25

console.log(`The total price is = $${price * quantity}`);
console.log('The total price is = $' + price * quantity);
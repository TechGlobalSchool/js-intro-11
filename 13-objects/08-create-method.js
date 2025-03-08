const person = {
  fname: 'John',
  lname: 'Doe',
  age: 25
};

const person2 = Object.create(person);

person.isAlive = true;

console.log(person);
console.log(person2.age);
console.log(person2.fname);
console.log(person2.isAlive);
console.log(person2.address);
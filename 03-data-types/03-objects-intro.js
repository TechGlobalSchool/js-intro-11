// Objects

const person = {
  fname: 'John',
  lname: 'Doe',
  age: 45,
  vip: false
};

console.log(person); // { fname: 'John', lname: 'Doe', age: 45, vip: false }
console.log(typeof person); // object

// fname
let fname = person.fname;

console.log(fname); // 'John'
console.log(typeof fname); // string 

console.log(typeof person.age); // number

// How to access the properties of an object using 
console.log(person.fname);
console.log(person.lname);
console.log(person['fname']);
console.log(person['lname']);


// Updating the property values for an object
const program = {
  name: 'SDET',
  start: 'Jan 20, 2025',
  duration: '6 months'
};

console.log(program);

program.start = 'Jan 27, 2025';
program['duration'] = '7 months';

console.log(program);


const student = {
  fullname: 'John Doe',
  courses: ['Math', 'Science'],
  address: {
    street: '123 Abc St',
    number: null,
    city: 'Chicago',
    state: 'IL',
    ZIPCode: '12345 1234'
  }
};

console.log(student);

// Adding a property to an existing object
student.age = 25;
student['favDish'] = 'Salmon Salad';

console.log(student);

// Remove some properties from an existing object
delete student.address;
delete student.age;
delete student['favDish'];

console.log(student); // { fullname: 'John Doe', courses: [ 'Math', 'Science' ] }
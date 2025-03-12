/*
OOP = Object-Oriented Programming
OOP Languages: Java, C#, C++
OOP languages will convert every real life objects into programming


JS is not an oop language
JS is prototype based programming language

const mug = {
  material: 'glass',
  price: 36.08,
  design: [ 'design1', 'design2' ]
}
*/

// constructor function - Before ES6 - prototype-based
function Mug(material, price, designName) {
  this.material = material;
  this.price = price;
  this.designName = designName;
}

const mugJanuary = new Mug('glass', 36.08, 'design1');
const mugFebruary = new Mug('wooden', 37.84, 'design2');
const mugMarch = new Mug('plastic', 37.84, 'design3');
const mugApril = new Mug('glass', 100, 'supernicedesign');

console.log(mugApril);


// After ES6 - classes - class-based
class Student {
  constructor(fullname, age, program) {
    this.fullname = fullname;
    this.age = age;
    this.program = program;
  }
}

const student1 = new Student('John Doe', 25, 'SDET');
const student2 = new Student('Alex Smith', 17, 'SE');

console.log(student1);
console.log(student1.fullname); // 'John Doe'
console.log(student2.program); // 'SE'
console.log(student1.address); // undefined
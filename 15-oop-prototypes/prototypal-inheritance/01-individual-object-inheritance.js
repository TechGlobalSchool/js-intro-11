const baseTable = {
  name: 'Table',
  adjustable: true,
  method: function () {
    console.log('This is a function');
  }
};

const diningTable = {
  __proto__: baseTable, // inheriting properties and methods of baseTable object
  purpose: 'Dining',
  material: 'Wood'
};

const officeTable = {
  purpose: 'Work-Office',
  material: 'Wood',
  __proto__: baseTable
}

// console.log(officeTable.name); // Table
// console.log(officeTable.adjustable); // true
// officeTable.method(); // This is a function


console.log(officeTable.__proto__); // { name: 'Table', adjustable: true, method: [Function: method] }



// Another way to inherit a single objects methods and properties to another object using Object.create() method
const tool = {
  variable: 'Just an info',
  fix: function () {
    console.log('FIX');
  }
};

const hammer = Object.create(tool); // hammer inherits all the methods and properties of the tool object here
hammer.brand = 'any brand';
hammer.break = function () {
  console.log('BREAK');
}

hammer.fix();
hammer.break();
console.log(hammer.variable); // Just an info
console.log(hammer.brand); // any brand

//tool.break(); // ool.break is not a function -> parent cannot access child methods or properties

console.log(hammer.__proto__); // { variable: 'Just an info', fix: [Function: fix] }
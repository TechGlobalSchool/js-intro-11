// TASK: Create a Teacher prototype with fname, lname, age, field properties

function Teacher(fname, lname, age, field) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.field = field;
}

// Create 2 Teacher Prototype methods as teach and giveHomework - void and logs below
// fname teaches field.
// fname gives homework.

Teacher.prototype.teach = function() {
  console.log(`${this.fname} teaches ${this.field}.`);
}

Teacher.prototype.giveHomework = function() {
  console.log(`${this.fname} gives homework.`);
}

// Create 4 Teacher Objects/Instances
const teacher1 = new Teacher('John', 'Doe', 35, 'Math');
const teacher2 = new Teacher('Jane', 'Donnely', 55, 'English');
const teacher3 = new Teacher('Sarah', 'Elly', 43, 'Art');
const teacher4 = new Teacher('Adam', 'Bayer', 33, 'Science');

const teachers = [ teacher1, teacher2, teacher3, teacher4 ];

// Find the oldest Teacher -> Jane
// Find the average age of the teachers -> 41.5
// Find the youngest teacher -> Adam Bayer
// Get all the fullnames of the teachers -> ['John Doe', 'Jane Donnely', 'Sarah Elly', 'Adam Bayer']

const oldest = teachers.reduce((acc, curr) => {
  if(curr.age > acc.age) acc = curr;
  return acc;
}, teachers[0]);

console.log('Oldest Teacher is:', oldest.fname);

const sumOfAges = teachers.reduce((acc, curr) => acc += curr.age, 0);

console.log('Sum of ages', sumOfAges);
console.log('Average of ages', sumOfAges / teachers.length);

const youngest = teachers.reduce((acc, curr) => {
  if(curr.age < acc.age) acc = curr;
  return acc;
}, teachers[0]);

console.log('Youngest Teacher is:', youngest.fname, youngest.lname);

const fullnames = teachers.map(x => `${x.fname} ${x.lname}`);
console.log(fullnames);
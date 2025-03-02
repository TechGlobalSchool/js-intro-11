const objects = [ 'Pen', 'Eraser', 'Board', 'Paper' ];

// You can use for loop to iterate arrays but for...of loop is better
// for(let i = 0; i < objects.length; i++) { // 0, 1, 2, 3
//   console.log(objects[i]);
// }

let countStartP = 0;

for(const obj of objects) {
  if(obj.startsWith('P')) countStartP++;
}

console.log(countStartP);


const salaries = [ 1200.32542, 1500.345, 3000.349857 ];

for(let i = 3; i < salaries.length; i++) { // i = 0, 1, 2
  console.log(salaries[i].toFixed(2))
}

for(const salary of salaries) {
  console.log(salary.toFixed(2));
}


const students = [
  {
    fname: 'John',
    age: 25
  },
  {
    fname: 'Jane',
    age: 24
  }
];

for(const student of students) {
  console.log(student.fname, student.age);
}
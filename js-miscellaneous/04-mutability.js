// Primitives are immutable
let num1 = 10;

let num2 = num1;

console.log(num1); // 10
console.log(num2); // 10

num2 = 11;

console.log(num1); // 10
console.log(num2); // 11

// References are mutable
const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr1.pop();
arr2.pop();

console.log(arr1);
console.log(arr2);


const table1 = {
  material: 'Wood',
  color: 'Brown'
};

const table2 = table1;

table1.material = 'Granite';
delete table2.color;

console.log(table1);
console.log(table2);

// Then how can I have independent copy of reference types
const testAccount = {
  username: 'TestTech123',
  password: 'SuperSecretPassword',
  fullname: 'John Doe'
};

// Shallow copy using spread operator
const testAccountCopy = {
  ...testAccount
};

testAccountCopy.fullname = 'Alex Smith';

console.log(testAccount);
console.log(testAccountCopy);


// Why Shallow copy is not the best choice 
// Shallow copy will not work nested objects
const student = {
  fullname: 'John Doe',
  grades: {
    mid: 50,
    final: 75
  }
};

const studentCopy = {
  ...student
};

studentCopy.fullname = 'Alex Smith';
studentCopy.grades.final = 100;

console.log(student); // { fullname: 'John Doe', grades: { mid: 50, final: 100 } }
console.log(studentCopy); // { fullname: 'Alex Smith', grades: { mid: 50, final: 100 } }


// Deep copy using JSON
const instructor = {
  id: 1,
  students: [
    {
      fullname: 'John Doe',
      grades: {
        final: 100
      }
    },
    {
      fullname: 'Jane Doe',
      grades: {
        final: 100
      }
    }
  ]
};

const instructorCopy = JSON.parse(JSON.stringify(instructor));
instructorCopy.students[1].fullname = 'Alex Smith';

console.log(instructorCopy.students[1].fullname);
console.log(instructor.students[1].fullname);
/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
examScores : midterm: 60 and final: 90

Output your object to the console
*/

const student = {
  firstName: "Alex",
  lastName: "Smith",
  hobbies: ["Soccer", "Watching movies"],
  examScores: {
    first: 60,
    second: 75,
    third: 80,
    fourth: 100,
    final: 90
  }
};

console.log(student.hobbies); // [ 'Soccer', 'Watching movies' ]
console.log(student.examScores); // { midterm: 60, final: 90 } 
console.log(student.hobbies[0]); // Soccer
//console.log((student.examScores.midterm + student.examScores.final) / 2); // 75


const allExamValues = Object.values(student.examScores); // [60, 75, 80, 100, 90]

let average = allExamValues.reduce((acc, curr) => acc + curr, 0) / allExamValues.length;
console.log(average);

/*
Print hobbies -> [ 'Soccer', 'Watching movies' ]
Print examScores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
Find and print average of exam scores -> 75
*/

let date = "02/23/2025";

// Get the date and make sure it is today's date.

const dateArr = date.split("/");

// let month = dateArr[0];
// let day = dateArr[1];
// let year = dateArr[2];

const [month, day, year] = dateArr; // [ '02', '23', '2025' ]
const currentDate = new Date();

if (
  month === currentDate.getMonth() + 1 &&
  day === currentDate.getDate() &&
  year === currentDate.getFullYear
) {
  console.log('The day retrieved is today');
}
else {
  console.log('There is problem with the last login date!');
}

// array destructuring 
const credentials = ['techglobal', 'techglobal@gmail.com', 'Test1234'];

const [username, , password] = credentials;

console.log(username);
console.log(password);

const favs = ['Shish Kabob', 'Amok', 7, 'Batch-11', true];
const [ , favBook, , favBatch ] = favs;

console.log(favBook);
console.log(favBatch);


const student = {
  fname: 'John',
  lname: 'Doe',
  className: 'Math',
  grades: [ 25, 70, 100 ]
};

const [ mid1, mid2, final ] = student.grades;

// 60 
const finalResult = mid1 * 0.2 + mid2 * 0.3 + final * 0.5;

console.log(finalResult >= 60 ? 'PASSED' : 'FAILED');
const car = {
  make: 'Tesla',
  model: 'Model 3',
  trim: 'SEDAN',
  color: 'Black',
  VIN: '5YJ3E1EA1LF747442'
};

// Serialize JS Object into JSON
const carJSON = JSON.stringify(car);

console.log(car);
console.log(carJSON);


const student = '{"ID": 1, "FULL_NAME":"John Doe", "EMAIL":"john@gmail.com"}';

// Validate the email is john@gmail.com
// Deserialize JSON string into a JS Object
const studentObject = JSON.parse(student);
console.log(studentObject.EMAIL);

// Getting information from Server using fetch() 
fetch('https://api.techglobal-training.com/instructors')
  .then(res => {
    return res.json();
  })
  .then(data => {
    const result = data;
    console.log(result);
    console.log(result.length);
  })


const obj = {
  age: undefined, // Not supported
  favMovie: null,
  symbol: Symbol(), // Not supported
  printHi: function() {
    console.log('Hi');
  } // Not supported
}

const objJSON = JSON.stringify(obj);
console.log(objJSON); // {"favMovie":null}

const arr1 = []; // creating an array with array templates
const arr2 = new Array(); // creating an array with Array constructor


const cities = ['Chicago', 'Miami', 'Des Plaines'];

console.log(cities);



const orders = [
  {
    productName: 'Phone Screen Protector',
    price: 10.99
  },
  {
    productName: 'Lego',
    price: 100.99
  }
];

console.log(orders[0].price); // 10.99

const favorites = [
  ['Salmon', 'Salad'],
  ['Amok', 'My Name is Red'],
  ['Chicago', 'LA', 'Toronto'],
  ['Tesla', 'Toyota', 'BMW', 'Honda']
];

favorites.length; // 4
favorites[2].length; // 3
favorites[1].length; // 2

// Basics of Arrays 
const numbers = [ 10, 5, 7, -3, 15 ];

// Get the size of the array using length property 
let size = numbers.length; // 5

console.log(size);

// Get the elements in an array using index (indexing starts from ZERO)
numbers[0]; // 10
numbers[3]; // -3 

numbers[-1]; // undefined
numbers[5]; // undefined

// How to dynamically get first and last elements in an array using property access 
const names = [ 'John', 'Jane', 'Max', 'Alex' ];

names[0]; // always returns first name 
names[names.length - 1]; // always returns last name

console.log(names[1.5]); // undefined
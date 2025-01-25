// Arrays
let studentName = 'Ayah';

// Multiple names, numbers, objects, strings, prices
const names = ['John', 'Alex', 'James', 'Max']; // string array
const numbers = [5, 7, 10, 15]; // number array

console.log(names); // [ 'John', 'Alex', 'James', 'Max' ]
console.log(numbers); // [ 5, 7, 10, 15 ]


const favoriteMovies = ['Matrix', 'Avengers', 'Fast and Furious'];

console.log(favoriteMovies); // [ 'Matrix', 'Avengers', 'Fast and Furious' ]
console.log(typeof favoriteMovies); // object


// Getting the size of the array - how many elements you have in the array
let sizeOfArray = favoriteMovies.length;
console.log(sizeOfArray); // 3

// Access an speficic element in the array
let secondMovie = favoriteMovies[1];

console.log(secondMovie);
console.log(favoriteMovies[2]); // 'Fast and Furious'
console.log(typeof favoriteMovies[2]); // string

console.log(favoriteMovies[3]); // undefined
console.log(favoriteMovies[-1]); // undefined


const cities = ['Rome', 'Berlin'];

console.log(cities.length); // 2

// Update an existing element 
cities[1] = 'Chicago';

console.log(cities); // [ 'Rome', 'Chicago' ]

// Add a new element
// cities[2] = 'Miami'; // [ 'Rome', 'Chicago', 'Miami' ]
cities.push('Miami');

cities.push('Milan', 'Gent');

console.log(cities); // [ 'Rome', 'Chicago', 'Miami' ]


const ids = [103, 104, 105, 500];

let firstElement = ids[1];
let lastElement = ids[ids.length - 2];

console.log(firstElement);
console.log(lastElement);


// 
const mixArray = [5, 'John', true, 3 === 0, Symbol('Foo'), 10.99, undefined, null, NaN, {}, []];
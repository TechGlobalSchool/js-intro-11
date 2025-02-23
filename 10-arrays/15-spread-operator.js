const numbers = [1, 2, 3, 10, -7];

console.log(numbers); // [ 1, 2, 3, 10, -7 ]
console.log(...numbers);

const winter = [ 'Dec', 'Jan', 'Feb'];
const spring = [ 'Mar', 'Apr', 'May'];
const summer = [ 'Jun', 'Jul', 'Aug'];
const fall = [ 'Sep', 'Oct', 'Nov'];

//const months = winter.concat(spring, summer, fall);
const months = [...winter, ...spring, ...summer, ...fall];

console.log(months);


const nums = [ 10, 15, -7, 5, 20 ];
// max number in the array
// min number in the array

console.log(Math.max(...nums)); // 20
console.log(Math.min(...nums)); // -7


const products = ['Phone', 'MacBook Pro', 'Air Pods'];

const products2 = [...products, 'TV', 'Projector'];

console.log(products); // [ 'Phone', 'MacBook Pro', 'Air Pods' ]
console.log(products2); // [ 'Phone', 'MacBook Pro', 'Air Pods', 'TV', 'Projector' ]
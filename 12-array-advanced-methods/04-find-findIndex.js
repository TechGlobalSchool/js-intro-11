const nums = [-1, 1, 3, 0, 2, 6, 8];  

// Please find the first even number from the array -> 0

let firstEven = nums.find((num) => num % 2 === 0);
let firstEvenIndex = nums.findIndex((num) => num % 2 === 0);

console.log(firstEven); // 0
console.log(firstEvenIndex); // 3


const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA']; 

// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

console.log(cities.find((city) => city.length === 4));
console.log(cities.findLast((city) => city.length === 6));
console.log(cities.findIndex((city) => city === 'LA'));
console.log(cities.find((city) => city.toLowerCase().includes('i'))); 
console.log(cities.findLast((city) => city.length === 4));

console.log(cities.find((city) => city.length === 10)); // undefined
console.log(cities.findIndex((city) => city.length === 10)); // -1

console.log(cities.findLastIndex(x => x === 'Des Plaines')); // -1

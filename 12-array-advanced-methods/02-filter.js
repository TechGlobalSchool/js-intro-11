const names = [ 'Mariia', 'Alex', 'John', 'Jane', 'Victoria' ];

// Get all the names that have 4 characters: [ 'Alex', 'John', 'Jane' ]

const namesWith4Chars = names.filter((x) => x.length === 4);

console.log(namesWith4Chars);

// How many names has 'a' or 'A' in it : 4  -> reduce() is preferred for this
console.log(names.filter((name) => name.toLowerCase().includes('a')).length);


const numbers = [10, 5, 100, 77, 50, 65, 0]; 

// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

console.log(numbers.filter((num) => num >= 50));


const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];

// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4    -> reduce() method would preferred
// Count how many elements has i      -> 2    -> reduce() method would preferred

console.log(fruits.filter((x) => x.toLowerCase().includes('apple')));
console.log(fruits.filter((x) => x.toLowerCase().includes('a')).length);
console.log(fruits.filter((x) => x.toLowerCase().includes('i')).length);
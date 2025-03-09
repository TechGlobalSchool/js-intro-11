// keys are always unique but values can be duplicates
const computer = {
  os: 'MacOS',
  color: 'Black',
  memory: '1 TB',
  price: 999.99
};

// for in loop 
for(const key in computer) {
  console.log(key); // retrieves keys one by one
  console.log(computer[key]); // retrieves values one by one
}

console.log('\n------for..of loop--------\n')
// for...of loop 

Object.keys(computer); // keys as an array 
Object.values(computer); // values as an array
Object.entries(computer); // key-value pairs as a nested array

for(const key of Object.keys(computer)) {
  console.log(key); // retrieves keys one by one
  console.log(computer[key]); // retrieves values one by one
}

for(const value of Object.values(computer)) {
  console.log(value); // retrieves values one by one
}

console.log('\n------entries--------\n')

console.log(Object.entries(computer));

for(const entry of Object.entries(computer)) {
  console.log(entry); // entries keys one by one
  console.log(entry[0]); // retrieves keys one by one
  console.log(entry[1]); // retrieves values one by one
}


for(const [ k, v ] of Object.entries(computer)) {
  console.log(k, v);
}

// [ 'os', 'MacOS' ]
// [ 'color', 'Black' ]
// [ 'memory', '1 TB' ]
// [ 'price', 999.99 ]
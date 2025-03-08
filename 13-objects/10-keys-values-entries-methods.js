const phone = {
  brand: 'iPhone',
  storage: 64,
  color: 'Yellow',
};

console.log(Object.keys(phone)); // [ 'brand', 'storage', 'color' ]
console.log(Object.values(phone)); // [ 'iPhone', 64, 'Yellow' ]
console.log(Object.entries(phone)); // [ [ 'brand', 'iPhone' ], [ 'storage', 64 ], [ 'color', 'Yellow' ] ]

// keys: array of keys 
// values: array of values
// entries: nested array of properties

for(const feature of Object.keys(phone)) { // [ 'brand', 'storage', 'color' ]
  console.log(feature);
}

for(const value of Object.values(phone)) { // [ 'iPhone', 64, 'Yellow' ]
  console.log(value);
}

for(const [ key, value ] of Object.entries(phone)) { // [ [ 'brand', 'iPhone' ], [ 'storage', 64 ], [ 'color', 'Yellow' ] ]
  console.log(`The entry key is '${key}' and the entry value is '${value}'.`);
}
const vehicle = {
  move: function() {
    console.log('MOVE');
  }
};

const car = {
  __proto__: vehicle,
  drive: function () {
    console.log('DRIVE');
  }
};

const myCar = {
  __proto__: car,
  electricCharging: true
}

console.log(myCar.electricCharging); // true
myCar.drive(); // DRIVE
myCar.move(); // MOVE

// Prototype chaining
console.log(myCar.__proto__); // { drive: [Function: drive] }
console.log(myCar.__proto__.__proto__); // { move: [Function: move] }
console.log(myCar.__proto__.__proto__.__proto__); // [Object: null prototype] {}
console.log(myCar.__proto__.__proto__.__proto__.__proto__); // null
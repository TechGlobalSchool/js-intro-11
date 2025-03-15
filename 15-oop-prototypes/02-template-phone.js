// Before ES6
// Phone constructor for creating prototype
/*
function Phone(brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;
}

// Add prototype methods
Phone.prototype.call = function () {
  console.log(`${this.brand} is calling!`);
}

Phone.prototype.text = function () {
  return `${this.brand} text!`;
}

Phone.prototype.connectCarPlay = function () {
  console.log('Connection completed!');
}

const phone1 = new Phone('iPhone', 'Purple', 1000);
const phone2 = new Phone('Samsung', 'Blue', 1200);
const phone3 = new Phone('Nokia', 'Black', 750);

phone2.call();
console.log(phone2.text());

phone1.connectCarPlay();
phone2.connectCarPlay();
phone3.connectCarPlay();
*/

// After ES6
// Create a class
class Phone {
  // create constructor which takes properties and assigns them to this keyword
  constructor(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }

  // Add void instance/object methods
  call() {
    console.log(`${this.brand} is calling!`);
  }

  // Add return instance/object methods
  text() {
    return `${this.brand} text!`;
  }

  // static methods - this can be invoked with the template name
  static anyFunction() {
    console.log('This is a static method!');
  }
}

// Instances or object of the Phone template
const phone1 = new Phone('iPhone', 'Purple', 1000);
const phone2 = new Phone('Samsung', 'Blue', 1200);
const phone3 = new Phone('Nokia', 'Black', 750);

phone1.call();
phone2.call();
phone3.call();

Phone.anyFunction();
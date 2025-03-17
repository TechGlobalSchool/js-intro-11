function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.eat = function () {
  console.log('EAT');
}

Animal.prototype.sleep = function () {
  console.log('SLEEP');
}

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

// Inherit Animal Prototype for Dog Prototype
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log('BARK');
}

const dog1 = new Dog('Lucy', 3, 'Collie');

dog1.bark();
dog1.eat();
dog1.sleep();
// parent class can have multiple child classes like Person had Singer, Dancer, Programmer
// However, child class can have only ONE parent class like Singer had Person
// Classes can ONLY extend a single class
// constructor() {} // this is default constructor will always be in your class in case you do not create one

class Animal {
  eat() {
    console.log('EAT');
  }
  sleep() {
    console.log('SLEEP');
  }
}

class Cat extends Animal {
  play() {
    console.log('PLAY');
  }
}

class Dog extends Animal {
  protect() {
    console.log('PROTECT');
  }
}

class GermanShephard extends Dog {
  task() {
    console.log('TASK');
  }
}

const dog1 = new Animal();
dog1.eat();
dog1.sleep();

const dog2 = new Dog();
dog2.eat();
dog2.sleep();
dog2.protect();
//dog2.task(); // TypeError: dog2.task is not a function -> Parent class CANNOT access child class methods and properties

const dog3 = new GermanShephard();
dog3.eat();
dog3.sleep();
dog3.protect();
dog3.task();

console.log(dog3.__proto__); // Dog {}
console.log(dog3.__proto__.__proto__); // Animal {}
console.log(dog3.__proto__.__proto__.__proto__); // {}
console.log(dog3.__proto__.__proto__.__proto__.__proto__); // null
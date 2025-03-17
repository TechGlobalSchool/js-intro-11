class Person {
  constructor(fullname, age) {
    this.fullname = fullname;
    this.age = age;
  }
  eat(str = 'food') {
    console.log(`${this.fullname} eats ${str}.`);
  }
  sleep(num = 8) {
    console.log(`${this.fullname} sleeps ${num} hours.`)
  }
  walk() {
    return false;
  }
}

module.exports = Person;
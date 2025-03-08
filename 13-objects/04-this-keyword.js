const dog = {
  name: 'Johnny',
  age: 3,
  getInfo: function(num) {
    return this.name + ' ' + (this.age + num);
  }
};

console.log(dog);
console.log(dog.getInfo(2));


const math = {
  pi: 3.14,
  sum: function(num1, num2) {
    return num1 + num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  }
};

console.log(math.pi); // 3.14
console.log(math.sum(3, 5)); // 8
console.log(math.multiply(3, 5)); // 15
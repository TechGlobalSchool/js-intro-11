class Program {
  // static properties
  static name = 'SDET';
  static batchNo = 11;

  // instance methods
  funcA() {
    console.log('A');
  }

  static funcB() {
    console.log('B');
  }
}

//Program.funcA(); // you cannot access instance methods and properties with class name
Program.funcB(); // B
console.log(Program.name);
console.log(Program.batchNo);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.PI);

const p1 = new Program();
p1.funcA();
// this keyword refers to the current object of the template
// super keyword refers to the parent of current object of the template 

class Engineer {
  constructor(fullname, major) {
    console.log('This is Engineer constructor running...');
    this.fullname = fullname;
    this.major = major;
  }
  build() {
    console.log('Engineer builds!');
  }
}

class SoftwareEngineer extends Engineer {
  constructor(fullname, major, companyName) {
    console.log('This is SoftwareEngineer constructor running...');
    super(fullname, major); // invokes the parent constructor to assign fullname and major to object - MUST be the first statement before using this keyword!!!
    this.companyName = companyName;
  }
}

const eng = new SoftwareEngineer('Jane Doe', 'Software Engineering', 'Microsoft');


// Similar logic with standalone functions
function funcA() {
  console.log('This is function A running...');
}

function funcB() {
  funcA();
  console.log('This is function B running...');
}

funcB();
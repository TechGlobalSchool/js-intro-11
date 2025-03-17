const Person = require("./Person");

class Singer extends Person{
  constructor(fullname, age, bandName) {
    super(fullname, age);
    this.bandName = bandName;
  }
  sing() {
    return true;
  }
  playGuitar() {
    return true;
  }
}

module.exports = Singer;
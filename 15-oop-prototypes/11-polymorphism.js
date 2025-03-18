class Instructor {
  teach() {
    console.log('TEACH');
  }
}

class PersonalTrainer extends Instructor {
  train() {
    console.log('TRAIN');
  }
}

// Polymorhism
const trainer1 = new PersonalTrainer();
const trainer2 = new Instructor();

trainer1.teach();
trainer2.teach();

trainer1.train();
trainer2.train();
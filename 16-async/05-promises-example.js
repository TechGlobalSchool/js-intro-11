function gotoCarvana() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Carvana website is loaded...');
      resolve();
    }, 500);
  });
}

function clickOnFinancing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Carvana financing page is loaded...');
      resolve();
    }, 1000);
  });
}

function validateHeading(expected) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${expected} heading is loaded...`);
      resolve();
    }, 750);
  });
}

function test1() {
  gotoCarvana().then(() => {
    clickOnFinancing().then(() => {
      validateHeading('FINANCING MADE EASY');
    });
  });
}

test1();

function test2() {
  gotoCarvana()
    .then(() => clickOnFinancing())
    .then(() => validateHeading('FINANCING MADE EASY'))
}

test2();
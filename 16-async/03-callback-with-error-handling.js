const { getRandomNumber } = require('./../utils/MathHelper.js');

function getEven(successCallback, errorCallback) {
  setTimeout(() => {
    const ran = getRandomNumber(1, 10);
    console.log(`The number you get is ${ran}...`);
    if(ran % 2 === 0) successCallback();
    else errorCallback();
  }, 1000);
}

getEven(() => {
  console.log('SUCCESS!');
}, () => {
  console.log('ERROR');
});
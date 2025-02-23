function funcA(callbackFunc) {
  console.log('This is A!');
  callbackFunc();
}

funcA(() => console.log('This is B!'));

// funcA takes another function as a parameter -> Higher Order Function
// funcB is passed as and argument to another function -> Callback Function



function visitUrl(callbackFunc) {
  let serverUp = true;
  if(serverUp) {
    console.log('URL visited...');
    callbackFunc();
  }
  else console.log('ERROR, server down!');
}

function searchData() {
  console.log(`Data returned...`);
}

visitUrl(searchData);

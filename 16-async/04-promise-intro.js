const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('FAILURE');
  }, 2000);
});

console.log(p);
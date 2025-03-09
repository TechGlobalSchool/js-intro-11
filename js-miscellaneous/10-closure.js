// let initialScore = 0;

// function score() {
//   initialScore += 1;
// }

// score();
// score();
// initialScore = 100;
// score();
// score();
// score();

// console.log(initialScore); // 103

function program() {
  let initialScore = 0; // private variable to program function and cannot be accessed directly outside the function

  // this is the function to manipulate the private initialScore variable
  function score() {
    return initialScore += 1;
  }

  return score;
}

const player1Score =  program(); // initialScore = 0
const player2Score = program(); // initialScore = 0

player1Score();
console.log(player1Score());
console.log(player2Score());


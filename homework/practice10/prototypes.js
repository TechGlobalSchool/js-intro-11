function Player(nickName, score){
  this.nickName = nickName;
  this.score = score;
}

Player.prototype.getInfo = function(){
  return `${this.nickName}'s score is ${this.score}`
}

Player.prototype.attack = function(attackedPlayer){
  this.score += 1;
  attackedPlayer.score -= 1;
}

Player.prototype.damage = function(){
  this.score -= 1;
}

function SuperPlayer(nickName, score){
  Player.call(this, nickName, score)
}

SuperPlayer.prototype = Object.create(Player.prototype);



const player1 = new Player("Player 1", 5)
const superPlayer = new SuperPlayer("Super Player", 3)

console.log(player1.getInfo())
player1.damage()
console.log(player1.getInfo())

console.log(superPlayer.getInfo())
superPlayer.damage()
console.log(superPlayer.getInfo())

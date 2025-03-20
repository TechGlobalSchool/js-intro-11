class Player {
  constructor(nickName, score){
    this.nickName = nickName;
    this.score = score;

  }

  getInfo() {
    return `${this.nickName}'s score is ${this.score}`
  }

  attack(attackedPlayer){
    this.score += 1;
    attackedPlayer.score -= 1;
  }

  damage() {
    this.score -= 1;
  }
}

class SuperPlayer extends Player {
  constructor(nickName, score){
    super(nickName, score)
  }

  superAttack(attackedPlayer){
    this.score += 2;
    attackedPlayer.score -= 2;
  }

}

class HeroPlayer extends Player{
  constructor(nickName, score){
    super(nickName,score);
  }

  heal(healedPlayer){
    healedPlayer.score += 1;
  }
}

//implementation

const player1 = new Player("Player 1", 5)
const player2 = new Player("Player 2", 5)

const superPlayer = new SuperPlayer("Super Player", 3)
const heroPlayer = new HeroPlayer("Hero Player", 10)


player1.attack(player2)
player1.attack(superPlayer)

superPlayer.superAttack(player1)
superPlayer.superAttack(player2)
superPlayer.superAttack(heroPlayer)

heroPlayer.heal(player1);
heroPlayer.heal(player2);

player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);

player1.damage()
player2.damage()

const players = [player1, player2, superPlayer, heroPlayer]

for(const player of players){
  console.log(player.getInfo())
}
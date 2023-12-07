import Phaser, { Utils } from "phaser";
import GameScene from "./GameScene";

class Event1 extends Phaser.Scene {
  constructor() {
    super({
      key: "Event1",
    });
  
  }

  preload() {
    
  }

  initKeys() {
    this.physics.add.overlap(
      this.player, // ? object 1
      this.keys, // ? object 2
      this.collectCoin, // * callback function
      null,
      this
    );
  }

  collectCoin(player, key) {
    key.destroy()
    console.log('Coin collected!')
    // ? sending event
    this.events.emit('collectedCoin', 1, 'Bobby')
  }

  create() {
    this.initKeys();

    this.events.on(
      'collectedCoin', // listener event
      function (score1, name) { // funciton that you need to execute.
        this.score += score1
        console.log(`keys : ${this.score}`)
        console.log(name)
      },
      this //scope
    )

    this.events.on(
      'endGame',
      function () {
        // TODO closing all event before load another scene.
        this.events.off('collectedCoin')
        this.events.off('endGame')
        this.scene.start('Event1')
      },
      this
    )
   
  }

  update() {
    this.playerMove();

    // ! Endgame
    if(this.score === 0){
    this.events.emit('endGame')
    }
  }
}

export default Event1;
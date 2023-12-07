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
        console.log(`Score : ${this.score}`)
        console.log(name)
      },
      this //scope
    )
   
  }

  update() {

   
    
  }
}

export default Event1;
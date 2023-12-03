import Phaser, { Utils } from "phaser";

class InputClass extends Phaser.Scene {
  constructor() {
    super("InputClass");
  }

  preload() {
    this.load.spritesheet("crabmove", "assets/sprites/crabmoving.png",{
      frameWidth: 19.5,
      frameHeight :20
      }
    );
  }

  create() {
    
    //* create custom key
   
  }

  update() {

    //* use custom key with player
    if (this.W.isDown) {
      this.player.setVelocityY(-400);
    } else if (this.S.isDown) {
      this.player.setVelocityY(100);
    } else if (this.A.isDown) {
      this.player.setVelocityX(-100);
    } else if (this.D.isDown) {
      this.player.setVelocityX(100);
    } else {
      this.player.setVelocityX(0);
    }
    
  }
}

export default InputClass;
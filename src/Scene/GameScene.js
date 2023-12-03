import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image('crab', "assets/sprites/crabmoving.png")

    this.load.image('floor' , 'assets/images/floor.png')

    this.load.spritesheet("crabmove", "assets/sprites/crabmoving.png",{
      frameWidth: 19.5,
      frameHeight :20
      }
    );
    
    this.load.spritesheet("Map",'assets/images/Water-Pack-Tileset-for-Platformer-Pixel-Art3-720x480.png',{
    frameWidth:  32, // Replace with actual tile width
    frameHeight :  32 // Replace with actual tile height
    }
    );
  }

  create() {
    this.physics.world.setBounds(20,20,1280,600,true,true,true,true);

    this.player = this.physics.add.sprite(150,300,'crabmove').setScale(10);
    
    this.anims.create({
        key: "playerwalk",
        frames: this.anims.generateFrameNumbers("crabmove", {
            start: 0,
            end: 3
        }),
        frameRate: 5,
        repeat: -1
    });
    //set movement
    this.W = this.input.keyboard.addKey("w");
    this.A = this.input.keyboard.addKey("a");
    this.S = this.input.keyboard.addKey("s");
    this.D = this.input.keyboard.addKey("d");
   
  
    this.floor = this.physics.add
    .sprite(200, 730, "floor")
    .setOrigin(0.5, 1)
    .setImmovable(true);
  
    

    this.physics.add.collider(this.player,this.floor);
    
    this.floor.body.allowGravity = false;

    this.floors = this.physics.add.staticGroup();
    this.floors = this.add.tileSprite(0,640,4000,400,'floor').setScale(0.5).setOrigin(0);

   
  }

  update() {
    this.player.anims.play('playerwalk',true);

    if (this.W.isDown) {
      this.player.setVelocityY(-100);
    } else
    if (this.A.isDown) {
      this.player.setVelocityX(-100);
    } else
    if (this.D.isDown) {
      this.player.setVelocityX(100);
    } else {
      this.player.setVelocityX(0);
    }
      
    }
  }


export default GameScene;
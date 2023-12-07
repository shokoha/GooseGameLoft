import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image('crab', "assets/sprites/crabmoving.png");
    this.load.image('platform','assets/floor/floor1.png');
    this.load.image('floor' , 'assets/images/floor.png');
    this.load.image('floor1' , 'assets/floor/floor1.png');
    this.load.image('floor2' , 'assets/floor/floor2.png');
    this.load.image('floor3' , 'assets/floor/floor3.png');
    this.load.image('floor4' , 'assets/floor/floor4.png');
    this.load.image('floor5' , 'assets/floor/floor5.png');
    
    this.load.image('Map','assets/images/underwater-fantasy-preview.png')
    
    this.load.spritesheet("crabmove", "assets/sprites/crabmoving.png",{
      frameWidth: 19.5,
      frameHeight :20
      }
    );
    
    this.load.spritesheet("warp", "assets/sprites/Green Portal Sprite Sheet.png",{
      frameWidth: 64,
      frameHeight :64
      }
    );

    this.load.spritesheet('key','assets/Collectables/Dungeon Collectables.png',{
      frameWidth:16 ,
      frameHeight:15.5
    })

    
  }
  

  create() {
    //map
    this.bg = this.add.image(640,380,'Map').setScale(3.5);
    
    
    //player
    this.player = this.physics.add.sprite(100,620,'crabmove').setScale(1).setSize(19.5, 18).setOffset(0,0);
    //920,0 checkview at wall
    //730,620 checkview at wall3
    
    //warps
    this.warps = this.physics.add.staticGroup();
    this.warp = this.add.sprite(1220,620,'warp').setSize(100, 100).setOrigin(0,0);
    this.warps.add(this.warp)
    
    //animation
    this.anims.create({
        key: "playerwalk",
        frames: this.anims.generateFrameNumbers("crabmove", {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
      key: "warping",
      frames: this.anims.generateFrameNumbers("warp", {
        start: 0,
        end: 7
      }),
      frameRate: 5,
      repeat: -1
    });
    this.anims.create({
      key: "key-float",
      frames: this.anims.generateFrameNames("key", {
        start: 0,
        end: 17
      }),
      frameRate: 10,
      repeat: -1
    });

    //create info
    this.info = this.add.text(450,250,'', {font: "30px Arial", fill: "#000000" }).setDepth(5).setOrigin(0,0)
    this.info.setScrollFactor(0,0)
  
    //set movement
    this.W = this.input.keyboard.addKey("w");
    this.A = this.input.keyboard.addKey("a");
    this.S = this.input.keyboard.addKey("s");
    this.D = this.input.keyboard.addKey("d");

    //key setting
    this.key1 = this.add.sprite(75,460,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key2 = this.add.sprite(540,80,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key2 = this.add.sprite(800,580,'key').setSize(100, 100).setOrigin(0,0).setScale(2);


    //floor 
    this.floor = this.add.tileSprite(0,680,2560,150,'floor5').setScale(0.5).setOrigin(0,0);
    this.floors = this.physics.add.staticGroup();
    this.floors.add(this.floor);
    this.physics.add.collider(this.player,this.floors);
    
    //wall
    this.walls = this.physics.add.staticGroup();
    this.wall1 = this.add.tileSprite(300,400,70,800,'floor1').setScale(0.7);
    this.wall2 = this.add.tileSprite(600,325,70,800,'floor1').setScale(0.7);
    this.wall3 = this.add.tileSprite(900,400,70,800,'floor1').setScale(0.7);
    this.wall4 = this.add.tileSprite(640,0,4300,300,'floor3').setScale(0.3);
    this.walls.add(this.wall1);
    this.walls.add(this.wall2);
    this.walls.add(this.wall3);
    this.walls.add(this.wall4);    
   
    //Create Camera
    this.myCam = this.cameras.main;
    this.myCam.setBounds(0, 0, 1280, 720);
    this.myCam.setZoom(1);
    this.info.fixedToCamera = true;
    
    //platform-wall1 
    this.platforms_w1 = this.physics.add.staticGroup();
    this.platform_w1_1 = this.add.tileSprite(120,570,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w1_2 = this.add.tileSprite(50,500,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w1_3 = this.add.tileSprite(200,400,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w1_4 = this.add.tileSprite(120,280,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w1_5 = this.add.tileSprite(120,280,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w1_6 = this.add.tileSprite(13,280,268,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w1_7 = this.add.tileSprite(10,200,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w1_8 = this.add.tileSprite(150,150,134,67,'platform').setOrigin(0,0).setScale(0.4);
    
    //platform-wall2 
    this.platforms_w2 = this.physics.add.staticGroup();
    this.platform_w2_1 = this.add.tileSprite(325,120,335,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_2 = this.add.tileSprite(522,120,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_3 = this.add.tileSprite(415,180,268,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_4 = this.add.tileSprite(325,250,268,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_5 = this.add.tileSprite(468,250,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_6 = this.add.tileSprite(390,310,335,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_7 = this.add.tileSprite(325,370,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_8 = this.add.tileSprite(522,145,67,536,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_9 = this.add.tileSprite(450,337,67,670,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_10 = this.add.tileSprite(325,495,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_11 = this.add.tileSprite(325,620,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_12 = this.add.tileSprite(397,430,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_13 = this.add.tileSprite(370,555,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_14 = this.add.tileSprite(515,563,67,268,'platform').setOrigin(0,0).setScale(0.4);



    //platform-wall3
    this.platforms_w3 = this.physics.add.staticGroup(); 
    this.platform_w3_1 = this.add.tileSprite(720,580,268,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_2 = this.add.tileSprite(800,472,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_3 = this.add.tileSprite(747,472,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_4 = this.add.tileSprite(700,390,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_5 = this.add.tileSprite(650,300,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_6 = this.add.tileSprite(750,260,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_7 = this.add.tileSprite(650,170,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_8 = this.add.tileSprite(848,120,67,67,'platform').setOrigin(0,0).setScale(0.4);      
      
    //platform-wall4
    this.platforms_w4 = this.physics.add.staticGroup();
    this.platform_w4_1 = this.add.tileSprite(925,120,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_2 = this.add.tileSprite(925,250,603,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_3 = this.add.tileSprite(1025,120,536,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_4 = this.add.tileSprite(1225,250,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_5 = this.add.tileSprite(1100,145,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_6 = this.add.tileSprite(975,350,670,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_7 = this.add.tileSprite(925,455,603,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_8 = this.add.tileSprite(1216,375,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_9 = this.add.tileSprite(960,520,804,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_10 = this.add.tileSprite(942,630,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_11 = this.add.tileSprite(970,575,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_12 = this.add.tileSprite(1022,549,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_13 = this.add.tileSprite(1150,575,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_14 = this.add.tileSprite(1100,590,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_15 = this.add.tileSprite(1050,630,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_16 = this.add.tileSprite(950,180,67,67,'platform').setOrigin(0,0).setScale(0.4);
  
    //add collider
    this.physics.add.collider(this.player,this.walls);
    this.physics.add.collider(this.player,this.platforms_w1);
    this.physics.add.collider(this.player,this.platforms_w2);
    this.physics.add.collider(this.player,this.platforms_w3);
    this.physics.add.collider(this.player,this.platforms_w4);
    this.physics.add.collider(this.player,this.keys);
    
    //add platforms
    //--------------wall1------------------//
    this.platforms_w1.add(this.platform_w1_1);
    this.platforms_w1.add(this.platform_w1_2);
    this.platforms_w1.add(this.platform_w1_3);
    this.platforms_w1.add(this.platform_w1_4);
    this.platforms_w1.add(this.platform_w1_5);
    this.platforms_w1.add(this.platform_w1_6);
    this.platforms_w1.add(this.platform_w1_7);
    this.platforms_w1.add(this.platform_w1_8);
    //--------------wall2------------------//
    this.platforms_w2.add(this.platform_w2_1);
    this.platforms_w2.add(this.platform_w2_2);
    this.platforms_w2.add(this.platform_w2_3);
    this.platforms_w2.add(this.platform_w2_4);
    this.platforms_w2.add(this.platform_w2_5);
    this.platforms_w2.add(this.platform_w2_6);
    this.platforms_w2.add(this.platform_w2_7);
    this.platforms_w2.add(this.platform_w2_8);
    this.platforms_w2.add(this.platform_w2_9);
    this.platforms_w2.add(this.platform_w2_10);
    this.platforms_w2.add(this.platform_w2_11);
    this.platforms_w2.add(this.platform_w2_12);
    this.platforms_w2.add(this.platform_w2_13);
    this.platforms_w2.add(this.platform_w2_14);
    //--------------wall3------------------//
    this.platforms_w3.add(this.platform_w3_1);
    this.platforms_w3.add(this.platform_w3_2);
    this.platforms_w3.add(this.platform_w3_3);
    this.platforms_w3.add(this.platform_w3_4);
    this.platforms_w3.add(this.platform_w3_5);
    this.platforms_w3.add(this.platform_w3_6);
    this.platforms_w3.add(this.platform_w3_7);
    this.platforms_w3.add(this.platform_w3_8);
    //--------------wall4------------------//
    this.platforms_w4.add(this.platform_w4_1);
    this.platforms_w4.add(this.platform_w4_2);
    this.platforms_w4.add(this.platform_w4_3);
    this.platforms_w4.add(this.platform_w4_4);
    this.platforms_w4.add(this.platform_w4_5);
    this.platforms_w4.add(this.platform_w4_6);
    this.platforms_w4.add(this.platform_w4_7);
    this.platforms_w4.add(this.platform_w4_8);
    this.platforms_w4.add(this.platform_w4_9);
    this.platforms_w4.add(this.platform_w4_10);
    this.platforms_w4.add(this.platform_w4_11);
    this.platforms_w4.add(this.platform_w4_12);
    this.platforms_w4.add(this.platform_w4_13);
    this.platforms_w4.add(this.platform_w4_14);
    this.platforms_w4.add(this.platform_w4_15);
    this.platforms_w4.add(this.platform_w4_16);
    
    //set worldbound
    this.physics.world.setBounds(0,0,1280,720);
    this.physics.world.setBoundsCollision(true,true,true,true);
    this.player.setCollideWorldBounds(true);
    

  }

  update() {
    this.info.setText(
      `Time : `
    );
    this.key1.anims.play('key-float', true);
    this.key2.anims.play('key-float', true);
    this.player.anims.play('playerwalk',true);
    this.warp.anims.play("warping", true);

    this.myCam.startFollow(this.player);
    
    if (this.W.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-500);
    } else 
    if (this.A.isDown) {
      this.player.setVelocityX(-250);
    } else
    if (this.D.isDown) {
      this.player.setVelocityX(250);
    } else {
      this.player.setVelocityX(0);
    }

    }
  }

export default GameScene;
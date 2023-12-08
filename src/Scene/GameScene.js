import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene",});
      this.score=0
  }

  preload() {
    this.load.image('spike-down','assets/images/spike-down.png');
    this.load.image('spike-up','assets/images/spike-up.png');
    this.load.image('spike-right','assets/images/spike-right.png');
    this.load.image('spike-left','assets/images/spike-left.png');

    this.load.image('crab', "assets/sprites/crabmoving.png");

    this.load.image('platform','assets/floor/floor1.png');
    this.load.image('floor' , 'assets/images/floor.png');
    this.load.image('floor1' , 'assets/floor/floor1.png');
    this.load.image('floor2' , 'assets/floor/floor2.png');
    this.load.image('floor3' , 'assets/floor/floor3.png');
    this.load.image('floor4' , 'assets/floor/floor4.png');
    this.load.image('floor5' , 'assets/floor/floor5.png');
    
    this.load.image('Map','assets/images/underwater-fantasy-preview.png');

   
    this.load.image('banner', 'assets/images/banner.png');
    
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


  destroyKey1(player, key1) {
    
    this.key1.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey2(player, key2) {
    this.key2.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey3(player, key3) {
    this.key3.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey4(player, key4) {
    this.key4.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey5(player, key5) {
    this.key5.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey6(player, key6) {
    this.key6.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey7(player, key7) {
    this.key7.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey8(player, key8) {
    this.key8.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey9(player, key9) {
    this.key9.destroy();
    this.events.emit("collectedKey");
  }
  destroyKey10(player, key10) {
    this.key10.destroy();
    this.events.emit("collectedKey");
  }
  

    
  create() {
    //map
    this.bg = this.add.tileSprite(640,630,1280,720,'Map').setScale(3.5);
    
    
    //player
    this.player = this.physics.add.sprite(50,630,'crabmove').setScale(1).setSize(19.5, 18).setOffset(0,0);
    //50,620 checkview at wall
    //920,0 checkview at wall
    //730,620 checkview at wall3
    
    //warps
    this.warps = this.physics.add.staticGroup();
    this.warp = this.add.sprite(1220,620,'warp').setSize(100, 100).setOrigin(0,0);
    this.warps.add(this.warp)

    this.physics.add.overlap(this.player, this.warps);
    
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
    this.info = this.add.text(450,250,'', {font: "14px TH SarabunPSK", fill: "#000000", backgroundColor: "rgba(255,255,255,0.75)", padding: 3}).setDepth(5).setOrigin(0,0);
    this.info.setScrollFactor(0,0);
  
    //set movement
    this.W = this.input.keyboard.addKey("w");
    this.A = this.input.keyboard.addKey("a");
    this.S = this.input.keyboard.addKey("s");
    this.D = this.input.keyboard.addKey("d");

    //key setting
    this.keys = this.physics.add.staticGroup();
    this.key1 = this.add.sprite(75,460,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key2 = this.add.sprite(540,80,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key3 = this.add.sprite(323,645,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key4 = this.add.sprite(835,465,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key5 = this.add.sprite(475,440,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key6 = this.add.sprite(645,350,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key7 = this.add.sprite(1245,370,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key8 = this.add.sprite(925,420,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key9 = this.add.sprite(950,650,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    this.key10 = this.add.sprite(1125,170,'key').setSize(100, 100).setOrigin(0,0).setScale(2);
    
    //key group
    this.keys.add(this.key1);
    this.keys.add(this.key2);
    this.keys.add(this.key3);
    this.keys.add(this.key4);
    this.keys.add(this.key5);
    this.keys.add(this.key6);
    this.keys.add(this.key7);
    this.keys.add(this.key8);
    this.keys.add(this.key9);
    this.keys.add(this.key10);

    //key overlap
    this.physics.add.overlap(this.player, this.key1, this.destroyKey1, null, this);
    this.physics.add.overlap(this.player, this.key2, this.destroyKey2, null, this);
    this.physics.add.overlap(this.player, this.key3, this.destroyKey3, null, this);
    this.physics.add.overlap(this.player, this.key4, this.destroyKey4, null, this);
    this.physics.add.overlap(this.player, this.key5, this.destroyKey5, null, this);
    this.physics.add.overlap(this.player, this.key6, this.destroyKey6, null, this);
    this.physics.add.overlap(this.player, this.key7, this.destroyKey7, null, this);
    this.physics.add.overlap(this.player, this.key8, this.destroyKey8, null, this);
    this.physics.add.overlap(this.player, this.key9, this.destroyKey9, null, this);
    this.physics.add.overlap(this.player, this.key10, this.destroyKey10, null, this);

    //floor 
    this.floor = this.add.tileSprite(0,680,2560,150,'floor5').setScale(0.5).setOrigin(0,0);
    this.floors = this.physics.add.staticGroup();
    this.floors.add(this.floor);
    this.physics.add.collider(this.player,this.floors);
    
    //wall
    this.walls = this.physics.add.staticGroup();
    this.wall1 = this.add.tileSprite(300,400,70,800,'floor1').setScale(0.7);
    this.wall2 = this.add.tileSprite(600,323,70,800,'floor1').setScale(0.7);
    this.wall3 = this.add.tileSprite(900,400,70,800,'floor1').setScale(0.7);
    this.wall4 = this.add.tileSprite(640,0,4300,300,'floor3').setScale(0.3);
    this.walls.add(this.wall1);
    this.walls.add(this.wall2);
    this.walls.add(this.wall3);
    this.walls.add(this.wall4);    
   
    //Create Camera
    this.myCam = this.cameras.main;
    this.myCam.setBounds(0, 0, 1280, 720);
    this.myCam.setZoom(3);
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
    this.platform_w2_1 = this.add.tileSprite(324,120,335,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_2 = this.add.tileSprite(522,120,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_3 = this.add.tileSprite(415,180,268,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_4 = this.add.tileSprite(324,250,268,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_5 = this.add.tileSprite(469,250,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_6 = this.add.tileSprite(390,310,335,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_7 = this.add.tileSprite(324,370,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_8 = this.add.tileSprite(522,146,67,536,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_9 = this.add.tileSprite(450,337,67,670,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_10 = this.add.tileSprite(324,495,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_11 = this.add.tileSprite(324,620,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_12 = this.add.tileSprite(397,430,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_13 = this.add.tileSprite(370,555,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_14 = this.add.tileSprite(515,563,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w2_15 = this.add.tileSprite(476,471,67,67,'platform').setOrigin(0,0).setScale(0.4);

    //platform-wall3
    this.platforms_w3 = this.physics.add.staticGroup(); 
    this.platform_w3_1 = this.add.tileSprite(720,579,268,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_2 = this.add.tileSprite(800,472,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_3 = this.add.tileSprite(747,472,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_4 = this.add.tileSprite(700,390,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_5 = this.add.tileSprite(650,300,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_6 = this.add.tileSprite(750,260,201,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_7 = this.add.tileSprite(650,170,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w3_8 = this.add.tileSprite(849,120,67,67,'platform').setOrigin(0,0).setScale(0.4); 
      
    //platform-wall4
    this.platforms_w4 = this.physics.add.staticGroup();
    this.platform_w4_1 = this.add.tileSprite(924,120,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_2 = this.add.tileSprite(924,252,603,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_3 = this.add.tileSprite(1025,120,536,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_4 = this.add.tileSprite(1226,250,134,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_5 = this.add.tileSprite(1100,146,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_6 = this.add.tileSprite(975,350,670,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_7 = this.add.tileSprite(924,455,603,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_8 = this.add.tileSprite(1216,376,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_9 = this.add.tileSprite(960,520,804,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_10 = this.add.tileSprite(953,628,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_11 = this.add.tileSprite(980,574,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_12 = this.add.tileSprite(1040.5,546,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_13 = this.add.tileSprite(1150,574,67,268,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_14 = this.add.tileSprite(1095,615,67,67,'platform').setOrigin(0,0).setScale(0.4);
    this.platform_w4_15 = this.add.tileSprite(950,180,67,67,'platform').setOrigin(0,0).setScale(0.4);
  
    //add collider
    this.physics.add.collider(this.player,this.walls);
    this.physics.add.collider(this.player,this.platforms_w1);
    this.physics.add.collider(this.player,this.platforms_w2);
    this.physics.add.collider(this.player,this.platforms_w3);
    this.physics.add.collider(this.player,this.platforms_w4);
    this.physics.add.collider(this.player,this.spikes);
    
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
    this.platforms_w2.add(this.platform_w2_15);
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
    
    //set worldbound
    this.physics.world.setBounds(0,0,1280,720);
    this.physics.world.setBoundsCollision(true,true,true,true);
    this.player.setCollideWorldBounds(true);
    
    //spike
    this.spikes = this.physics.add.staticGroup();
    this.spikes.create(550,480,'spike-left').setOrigin(0,0).setScale(2).setSize(25,15).setOffset(7,15);
    this.spikes.create(127,149,'spike-left').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
    this.spikes.create(97,358,'spike-left').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
    this.spikes.create(826,119,'spike-left').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
    this.spikes.create(1193,378,'spike-left').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);

    this.spikes.create(325,221,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(350,91,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(1120,651,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(1110,426,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(973,223,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(1000,223,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(1130,223,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(325,466,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(952.2,599,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(1000,321,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(1110,321,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(1214,321,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(801,231,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);
    this.spikes.create(801,231,'spike-up').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(17,15);

    this.spikes.create(747,499,'spike-down').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(16,8);
    this.spikes.create(1250,276,'spike-down').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(16,8);
    this.spikes.create(1010,377,'spike-down').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(16,8);
    this.spikes.create(420,456,'spike-down').setOrigin(0,0).setScale(1.8).setSize(15,25).setOffset(16,8);
    
    this.spikes.create(827,550,'spike-right').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
    this.spikes.create(624,450,'spike-right').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
    this.spikes.create(324,330,'spike-right').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
    this.spikes.create(924,280,'spike-right').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
    this.spikes.create(624,245,'spike-right').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
    this.spikes.create(624,119,'spike-right').setOrigin(0,0).setScale(1.8).setSize(25,15).setOffset(7,15);
   
  
    // ------------------ Event ------------------ //
    this.events.on(
      'collectedKey',
      function(){
        this.score += 1;
        console.log(`Score : ${this.score}`)
      },
      this
    )
    this.events.on(
      "endGame",
      function () {
        this.score = 0;
        this.events.off("endGame");
        this.scene.pause();
        this.infoend = this.add.text(583,330,'', {font: "23px Arial", fill: "#0f536d", fontWeight: 400}).setDepth(5).setOrigin(0,0);
        this.infoend.setScrollFactor(0,0);
        this.infoend.setText(`END GAME`);
        this.banner = this.add.image(1070,580, "banner").setScale(0.1);
        this.button = this.add.image(1070,660, "restartbutton").setDepth(6).setScale(0.07);
      },
      this
    );

    this.physics.add.overlap(this.player, this.warps, () =>{
      if(this.score === 10){
      this.events.emit('endGame')
      }
    });
    this.physics.add.overlap(this.player,this.spikes,() => {
      this.player.setPosition(50,620,0,0);
    });
    
    //key animation
    this.key1.anims.play('key-float', true);
    this.key2.anims.play('key-float', true);
    this.key3.anims.play('key-float', true);
    this.key4.anims.play('key-float', true);
    this.key5.anims.play('key-float', true);
    this.key6.anims.play('key-float', true);
    this.key7.anims.play('key-float', true);
    this.key8.anims.play('key-float', true);
    this.key9.anims.play('key-float', true);
    this.key10.anims.play('key-float', true);
    
  }

  update(time, delta) {
    this.info.setText(
      `Time : ${Math.floor(time / 1000)} \nScore : ${this.score}`
    );

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
    this.bg.tilePositionX += 0.03;

    }
  }

export default GameScene;
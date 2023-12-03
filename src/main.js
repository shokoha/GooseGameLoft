import 'phaser';
import Phaser from 'phaser';
import GameScene from './Scene/GameScene';
import InputClass from './Scene/InputClass';

const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    roundPixels: true,
    width: 1280,
    height: 720,
    parent: 'content',
    backgroundColor: '#000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{y:100},
            debug: true
        }
    },
    scene: [
        GameScene,
        //InputClass
    ]
}
let game = new Phaser.Game(config);
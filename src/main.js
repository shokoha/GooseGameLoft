import 'phaser';
import Phaser from 'phaser';
import GameScene from './Scene/GameScene';
import Event1 from './Scene/Event1';

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
            gravity:{y:1000},
            debug: false
        }
    },
    scene: [
        GameScene
    ]
}
let game = new Phaser.Game(config);
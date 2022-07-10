import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT
},
autoCenter: Phaser.Scale.CENTER_BOTH,
autoRound: false,
render:{
    pixelArt: true
},
physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: false
    },
    
},
};

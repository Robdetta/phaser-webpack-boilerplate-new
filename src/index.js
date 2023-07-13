import Phaser from "phaser";
import config from "./config/config";
import { WaitingRoom } from "./scenes/WaitingRoom";



class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("WaitingRoom", WaitingRoom);
    this.scene.start("WaitingRoom");
  }
}


window.onload = function () {
  window.game = new Game();
};

//  preload () {
//   this.load.image('sky', 'assets/sky.png');
// }

//  create () {
//   this.add.image(400, 300, 'sky');
//   this.socket = io();
  
// }

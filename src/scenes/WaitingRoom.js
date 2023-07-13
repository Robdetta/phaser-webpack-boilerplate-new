import Phaser from "phaser";
import io from "socket.io-client";

export class WaitingRoom extends Phaser.Scene {
  constructor() {
    super("WaitingRoom");
  }
  preload() {
    this.load.image("sky", "assets/sky.png");
  }
  create() {
    this.add.image(400, 300, "sky");
    this.socket = io("http://localhost:3000");
  }
}
import Board from './Board';
import Handler from './Handler';

class Game {
  constructor() {
    this.board = new Board();
    this.handler = new Handler();
  }

  start() {
    this.board.init();
    this.handler.init();
  }
}

export default Game;

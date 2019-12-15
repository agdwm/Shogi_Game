import Board from './Board';

class Game {
  constructor() {
    this.board = new Board();
  }

  start() {
    this.board.init();
  }
}

export default Game;

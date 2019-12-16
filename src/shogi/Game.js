/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable func-names */
import Board from './Board';
import Player from './Player';
// import Handler from './Handler';

const $ = require('jquery');


class Game {
  constructor() {
    this.board = new Board();
    this.player = new Player();
    this.btnPlay = $('#btn-play');
    this.inputOrigin = $('#origin');
    this.inputDestination = $('#destination');
  }

  start() {
    this.board.init();
    this.btnPlay.on('click', (e) => {
      e.preventDefault();
      this.validatePlay();
      return false;
    });
  }

  validatePlay() {
    const error = 'coords incorrectas';
    if (this.validateCoords()) {
      this.board.update(this.inputOrigin.val(), this.inputDestination.val());
    } else {
      $('#form-error').text(error);
    }
  }

  validateCoords() {
    const regexp = new RegExp('^[0-8],[0-8]$');
    return (
      regexp.test(this.inputOrigin.val()) && regexp.test(this.inputDestination.val())
    );
  }
}


export default Game;

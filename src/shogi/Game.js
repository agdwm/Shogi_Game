/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable func-names */
import Board from './Board';
import Player from './Player';
import Piece from './Piece';
import Pawn from './piece/Pawn';

const $ = require('jquery');

const PLAYERS_NAMES = {
  black: '^',
  white: 'v',
};

class Game {
  constructor() {
    this.board = new Board();
    this.playerBlack = new Player('black', true);
    this.playerWhite = new Player('white', false);
    this.turn = 'black';
    this.piece = new Piece();
    this.btnPlay = $('#btn-play');
    this.inputOrigin = $('#origin');
    this.inputDestination = $('#destination');
    this.error = null;
  }

  start() {
    this.board.init();
    this.btnPlay.on('click', (e) => {
      e.preventDefault();
      this.validatePlay();
      return false;
    });
  }

  validateCoords() {
    const regexp = new RegExp('^[0-8],[0-8]$');
    return (
      regexp.test(this.inputOrigin.val())
      && regexp.test(this.inputDestination.val())
    );
  }

  validateOrigin(firstOrig, secondOrig) {
    if (!this.isEmpty(firstOrig, secondOrig)) {
      if (this.validateOwner(firstOrig, secondOrig)) {
        return true;
      }
      this.error = 'Propietario incorrecto';
      return false;
    }
    this.error = 'Celda origin vacía';
    return false;
  }

  validateDestination(firstDest, secondDest) {
    if (this.isEmpty(firstDest, secondDest)) {
      return true;
    }
    if (this.validateOwner(firstDest, secondDest)) {
      this.error = 'Movimiento no permitido';
      return false;
    }
    // capturePiece();
    return true;
  }

  validatePlay() {
    const [firstOrig, secondOrig] = this.inputOrigin.val().split(',');
    const [firstDest, secondDest] = this.inputDestination.val().split(',');

    if (this.validateCoords()) {
      if (this.validateOrigin(firstOrig, secondOrig)) {
        if (this.validateDestination(firstDest, secondDest)) { 
          if (this.validatePieceMov(firstOrig, secondOrig, firstDest)) {
            this.board.update(firstOrig, secondOrig, firstDest, secondDest);
            this.switchTurn();
          } else {
            this.error = 'Movimiento de pieza incorrecto';
          }
        }
      }
    } else {
      this.error = 'Coords incorrectas';
    }
    if (this.error) {
      $('#form-error').text(this.error);
    }
  }

  isEmpty(first, second) {
    return this.board.cells[first][second] === '  ';
  }

  validateOwner(first, second) {
    const pieceChar = this.board.cells[first][second];
    const ownerChar = pieceChar.substr(pieceChar.length - 1);
    return ownerChar === PLAYERS_NAMES[this.turn];
  }

  validatePieceMov(firstOrig, secondOrig, firstDest) {
    const pieceChar = this.board.cells[firstOrig][secondOrig];
    const pieceType = pieceChar.substr(0, 1);

    // eslint-disable-next-line default-case
    switch (pieceType) {
      case 'P':
        this.piece = new Pawn();
        return this.piece.validateMovement(firstOrig, firstDest, PLAYERS_NAMES[this.turn]);
    }
    return false;
  }

  switchTurn() {
    this.turn = this.turn === 'black' ? 'white' : 'black';
  }
}


export default Game;

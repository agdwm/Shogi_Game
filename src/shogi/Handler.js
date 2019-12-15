/* eslint-disable no-console */
/* eslint-disable func-names */
const $ = require('jquery');

class Handler {
  constructor() {
    this.btnPlay = $('#btn-play');
    this.inputOrigin = $('#origin');
    this.inputDestination = $('#destination');
  }

  init() {
    this.btnPlay.on('click', (e) => {
      e.preventDefault();
      this.validatePlay();
      return false;
    });
  }

  validatePlay() {
    console.log('value', this.inputOrigin.val());
    console.log('value', this.inputDestination.val());
    // this.validateCoords();
  }

  // validateCoords() {
  //   //recuperar los 2 inputs y comprobar que tienen 2 caracteres entre 0-8
  // }

  // validateMove() { }
  // validateReintroduce() { }
  // evaluateGameState() { }
  // changeOwner() { }
  // changeState() { }
}

export default Handler;

class Player { 
  constructor() {
    this.name = '';
    this.turn = false;
    this.listOfPieces = [];
    this.listOfCaptured = [];
  }

  changeTurn() {
    this.turn = false;
  }
}

export default Player;

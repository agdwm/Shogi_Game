

class Player {
  constructor(name) {
    this.name = name;
    this.listOfPieces = [];
    this.listOfCaptured = [];
  }

  changeTurn() {
    this.turn = false;
  }
}

export default Player;

const PLAYERS_NAMES = {
  '^': 'black',
  // eslint-disable-next-line quote-props
  'v': 'white',
};

class Player { 
  constructor() {
    this.name = PLAYERS_NAMES['^'];
    this.turn = false;
    this.listOfPieces = [];
    this.listOfCaptured = [];
  }

  changeTurn() {
    this.turn = false;
  }
}

export default Player;

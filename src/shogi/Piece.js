const PIECE_STATES = {
  0: 'active',
  1: 'triggered',
  2: 'promote',
  3: 'no-promoted', // can be promoted in the future
  4: 'captured',
  5: 'reintroduced',
};

class Piece { 
  constructor() { 
    this.name = '';
    this.owner = '';
    this.state = PIECE_STATES[0];
  }

  move(state) {
    this.state = state;
  }
}

export default Piece;

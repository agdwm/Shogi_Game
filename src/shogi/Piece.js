const PIECE_STATES = [
  'active',
  'triggered',
  'promote',
  'no-promoted', // can be promoted in the future
  'captured',
  'reintroduced',
];

class Piece {
  constructor() {
    this.name = '';
    this.owner = '';
    // eslint-disable-next-line prefer-destructuring
    this.state = PIECE_STATES[0];
  }

  move(state) {
    this.state = state;
  }
}

export default Piece;

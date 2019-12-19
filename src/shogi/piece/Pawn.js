import Piece from '../Piece';

class Pawn extends Piece {

  // eslint-disable-next-line class-methods-use-this
  validateMovement(firstOrig, firstDest, player) {
    if ((player === '^' && firstOrig - firstDest === 1) || (player === 'v' && firstOrig - firstDest === -1)) {
      return true;
    }
    return false;
  }
}

export default Pawn;

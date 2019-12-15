import './index.scss';
import Game from './shogi/Game';

window.$ = require('jquery');

const game = new Game();

game.start();

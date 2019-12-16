/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const $ = require('jquery');

class Board {
  constructor() {
    this.cells = [];
    this.promotionZoneWhite = [6, 7, 8];
    this.promotionZoneBlack = [0, 1, 2];
  }

  init() {
    this.cells = [
      ['Lv', 'Nv', 'Sv', 'Gv', 'Kv', 'Gv', 'Sv', 'Nv', 'Lv'],
      ['  ', 'Rv', '  ', '  ', '  ', '  ', 'Bv', '  ', '  '],
      ['Pv', 'Pv', 'Pv', 'Pv', 'Pv', 'Pv', 'Pv', 'Pv', 'Pv'],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['P^', 'P^', 'P^', 'P^', 'P^', 'P^', 'P^', 'P^', 'P^'],
      ['  ', '  ', 'B^', '  ', '  ', '  ', '  ', 'R^', '  '],
      ['L^', 'N^', 'S^', 'G^', 'K^', 'G^', 'S^', 'N^', 'L^'],
    ];

    this.paintBoard();
  }

  update(origin, destination) {
    const [firstOrig, secondOrig] = origin.split(',');
    const [firstDest, secondDest] = destination.split(',');

    this.cells[firstDest][secondDest] = this.cells[firstOrig][secondOrig];
    this.cells[firstOrig][secondOrig] = '  ';

    this.updateBoard();
  }

  removeBoard() {
    $('#table').remove();
  }

  paintBoard() {
    const table = $('<table></table>');
    table.attr('id', 'table');

    for (let i = 0; i < this.cells.length; i++) {
      const row = $('<tr></tr>');
      for (let j = 0; j < this.cells[i].length; j++) {
        const cell = $('<td></td>');
        cell.append(document.createTextNode(this.cells[i][j]));
        row.append(cell);
      }
      table.append(row);
    }

    $('#board').append(table);
  }

  updateBoard() { 
    this.removeBoard();
    this.paintBoard();
  }
}

export default Board;

/* eslint-disable no-plusplus */
/* eslint-disable no-console */
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

  // update(origin, destination) {}

  paintBoard() {
    const table = document.createElement('table');

    for (let i = 0; i < this.cells.length; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < this.cells[i].length; j++) {
        const cell = document.createElement('td');
        cell.appendChild(document.createTextNode(this.cells[i][j]));
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    document.getElementById('main').appendChild(table);
  }
}
export default Board;

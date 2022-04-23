export class TicTacToe {
  rows: number[];
  cols: number[];
  diagL: number;
  diagR: number;
  n: number;
  constructor(n: number) {
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diagL = 0;
    this.diagR = 0;
    this.n = n;
  }

  move(row: number, col: number, player: number): number {
    const currentPlayer = player === 1 ? 1 : -1;
    this.rows[row] += currentPlayer;
    this.cols[col] += currentPlayer;
    if (row === col) {
      this.diagL += currentPlayer;
    }
    if (row + col === this.n - 1) {
      this.diagR += currentPlayer;
    }
    if (
      Math.abs(this.rows[row]) === this.n ||
      Math.abs(this.cols[col]) === this.n ||
      Math.abs(this.diagL) === this.n ||
      Math.abs(this.diagR) === this.n
    ) {
      return player;
    }
    return 0;
  }
}

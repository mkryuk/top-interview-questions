export class Spreadsheet {
  private readonly rows: number;
  private readonly cols: number = 26;
  private grid: number[][];

  constructor(rows: number) {
    this.rows = rows;
    this.grid = Array.from({ length: rows }, () => {
      return new Array(this.cols).fill(0);
    });
  }

  setCell(cell: string, value: number): void {
    const { r, c } = this.toIndex(cell);
    this.grid[r][c] = value;
  }

  resetCell(cell: string): void {
    const { r, c } = this.toIndex(cell);
    this.grid[r][c] = 0;
  }

  getValue(formula: string): number {
    // drop leading '=' and split at '+'
    const expr = formula.startsWith("=") ? formula.slice(1) : formula;
    const plusPos = expr.indexOf("+");

    // parse left and right operands
    const leftStr = expr.slice(0, plusPos);
    const rightStr = expr.slice(plusPos + 1);

    const leftVal = this.parseOperand(leftStr);
    const rightVal = this.parseOperand(rightStr);

    return leftVal + rightVal;
  }

  private parseOperand(token: string): number {
    // try integer fast-path
    if (this.isNonNegativeInteger(token)) {
      return Number(token);
    }

    // otherwise treat as cell reference
    const { r, c } = this.toIndex(token);
    return this.grid[r][c];
  }

  // converts a cell like "C12" -> { r: 11, c: 2 }
  private toIndex(cell: string): { r: number; c: number } {
    // pattern: single column letter A..Z followed by 1..rows
    // since constraints guarantee validity, this is safe; still, keep a guard
    const match = /^([A-Z])([1-9]\d*)$/.exec(cell)!;

    const colLetter = match[1];
    const row1Based = Number(match[2]);

    // compute zero-based indices
    const c = colLetter.charCodeAt(0) - 65;
    const r = row1Based - 1;

    if (c < 0 || c >= this.cols || r < 0 || r >= this.rows) {
      throw new Error(`cell out of bounds: ${cell}`);
    }

    return { r, c };
  }

  private isNonNegativeInteger(token: string): boolean {
    if (token.length === 0) {
      return false;
    }

    if (!/^\d+$/.test(token)) {
      return false;
    }

    return true;
  }
}

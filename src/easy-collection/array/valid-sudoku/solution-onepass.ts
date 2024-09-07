export function isValidSudokuOnePass(board: string[][]): boolean {
  let rowMap = new Array(9).fill(0).map((v) => new Set<string>());
  let columnMap = new Array(9).fill(0).map((v) => new Set<string>());
  let boxMap = new Array(9).fill(0).map((v) => new Set<string>());

  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board.length; k++) {
      const element = board[i][k];
      if (element === ".") {
        continue;
      }
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(k / 3);
      if (rowMap[i].has(element) || columnMap[k].has(element) || boxMap[boxIndex].has(element)) {
        return false;
      }
      rowMap[i].add(element);
      columnMap[k].add(element);
      boxMap[boxIndex].add(element);
    }
  }
  return true;
}

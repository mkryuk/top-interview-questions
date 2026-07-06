export function pathsWithMaxScore(board: string[]): number[] {
  const mod = 1e9 + 7;
  const n = board.length;
  const scores: number[][] = Array.from({ length: n }, () => Array(n).fill(-1));
  const counts: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  scores[n - 1][n - 1] = 0;
  counts[n - 1][n - 1] = 1;

  for (let row = n - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      const cell = board[row][col];
      if (cell === "X") {
        continue;
      }
      if (row === n - 1 && col === n - 1) {
        continue;
      }
      const previousCells: [number, number][] = [
        [row + 1, col],
        [row, col + 1],
        [row + 1, col + 1],
      ];

      let bestPreviousScore = -1;
      let ways = 0;

      for (const [prevRow, prevCol] of previousCells) {
        if (prevRow >= n || prevCol >= n) {
          continue;
        }

        if (scores[prevRow][prevCol] === -1) {
          continue;
        }

        if (scores[prevRow][prevCol] > bestPreviousScore) {
          bestPreviousScore = scores[prevRow][prevCol];
          ways = counts[prevRow][prevCol];
        } else if (scores[prevRow][prevCol] === bestPreviousScore) {
          ways = (ways + counts[prevRow][prevCol]) % mod;
        }
      }

      if (bestPreviousScore === -1) {
        continue;
      }
      let value = 0;
      if (cell >= "1" && cell <= "9") {
        value = Number(cell);
      }

      scores[row][col] = bestPreviousScore + value;
      counts[row][col] = ways;
    }
  }

  if (scores[0][0] === -1) {
    return [0, 0];
  }

  return [scores[0][0], counts[0][0]];
}

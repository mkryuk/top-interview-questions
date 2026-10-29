export function minCost(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const xorStates = 1024;

  // dp[col][xor] == 1 means this xor value is reachable
  // at the current cell in this column
  const dp: Uint8Array[] = Array.from(
    { length: cols },

    () => new Uint8Array(xorStates),
  );

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const value = grid[row][col];
      const current = new Uint8Array(xorStates);
      if (row === 0 && col === 0) {
        current[value] = 1;
        dp[col] = current;
        continue;
      }

      // paths coming from above
      if (row > 0) {
        addTransitions(dp[col], current, value);
      }

      // paths coming from the left
      if (col > 0) {
        addTransitions(dp[col - 1], current, value);
      }

      dp[col] = current;
    }
  }

  const target = dp[cols - 1];
  for (let xor = 0; xor < xorStates; xor++) {
    if (target[xor] === 1) {
      return xor;
    }
  }

  return -1;
}

function addTransitions(source: Uint8Array, target: Uint8Array, value: number): void {
  for (let xor = 0; xor < source.length; xor++) {
    if (source[xor] === 1) {
      target[xor ^ value] = 1;
    }
  }
}

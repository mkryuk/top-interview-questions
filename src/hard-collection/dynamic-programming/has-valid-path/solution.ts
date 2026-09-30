export function hasValidPath(grid: string[][]): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  const pathLength = rows + cols - 1;

  // a valid parentheses string must have even length
  if (pathLength % 2 !== 0) {
    return false;
  }

  // these characters are mandatory for a valid string
  if (grid[0][0] !== "(" || grid[rows - 1][cols - 1] !== ")") {
    return false;
  }

  const maxBalance = Math.floor(pathLength / 2);

  // dp[col] contains all possible balances at the current cell
  const dp: Set<number>[] = Array.from({ length: cols }, () => new Set<number>());

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const next = new Set<number>();
      const change = grid[row][col] === "(" ? 1 : -1;

      // starting cell
      if (row === 0 && col === 0) {
        next.add(1);
        dp[col] = next;
        continue;
      }

      // balances coming from above
      if (row > 0) {
        addBalances(dp[col], next, change, maxBalance);
      }

      // balances coming from the left
      if (col > 0) {
        addBalances(dp[col - 1], next, change, maxBalance);
      }

      dp[col] = next;
    }
  }

  return dp[cols - 1].has(0);
}

function addBalances(source: Set<number>, target: Set<number>, change: number, maxBalance: number): void {
  for (const balance of source) {
    const nextBalance = balance + change;

    // balance can never become negative
    if (nextBalance < 0) {
      continue;
    }

    // we never need more '(' than half of the total path
    if (nextBalance > maxBalance) {
      continue;
    }

    target.add(nextBalance);
  }
}

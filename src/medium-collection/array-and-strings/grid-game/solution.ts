export function gridGame(grid: number[][]): number {
  const m = 2;
  const n = grid[0].length;
  let topSum = 0;
  let topPrefix = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    topSum += grid[0][i];
    topPrefix[i] = topSum;
  }
  let bottomSum = 0;
  let bottomPrefix = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    bottomSum += grid[1][i];
    bottomPrefix[i] = bottomSum;
  }

  let result = Infinity;
  for (let i = 0; i < n; i++) {
    const topPoints = topSum - topPrefix[i];
    const bottomPoints = i > 0 ? bottomPrefix[i - 1] : 0;
    const secondRobotPoints = Math.max(topPoints, bottomPoints);
    result = Math.min(result, secondRobotPoints);
  }
  return result;
}

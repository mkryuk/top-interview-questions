import { Heap } from "../../design/heap/heap";

export function minCost(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;
  // [row, col, cost]
  let heap = new Heap<[number, number, number]>((left, right) => left[2] - right[2]);
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];
  const costs: number[][] = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  heap.push([0, 0, 0]);
  while (heap.size() > 0) {
    const [row, col, cost] = heap.pop()!;
    // we out of borders or already processed this with lower cost
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1 || costs[row][col] <= cost) {
      continue;
    }
    costs[row][col] = cost;
    // if we reached the bottom-right cell
    if (row === m - 1 && col === n - 1) {
      return cost;
    }
    for (let i = 0; i < directions.length; i++) {
      const direction = grid[row][col];
      const [dRow, dCol] = directions[i];
      const newRow = row + dRow;
      const newCol = col + dCol;
      const newCost = cost + (direction === i + 1 ? 0 : 1);
      heap.push([newRow, newCol, newCost]);
    }
  }
  return -1;
}

export function lenOfVDiagonal(grid: number[][]): number {
  // diagonal directions
  const DIRS: ReadonlyArray<readonly [number, number]> = [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
  ];

  // next value in the 1->2->0->2->0 ... sequence after a given value
  // note: caller starts from a cell == 1 and asks for next target = 2
  const NEXT_AFTER: Record<0 | 1 | 2, 0 | 1 | 2> = {
    0: 2,
    1: 2,
    2: 0,
  };

  const rows: number = grid.length;
  const cols: number = grid[0].length;

  // memo index shape: [x, y, dir (0..3), turnFlag (0/1)]
  // size = rows * cols * 4 * 2 = rows * cols * 8
  const STRIDE_STATE: number = 8;
  const memo: Int32Array = new Int32Array(rows * cols * STRIDE_STATE);
  memo.fill(-1);

  // compute flat index in memo for (x,y,dir,turn)
  function idx(x: number, y: number, dir: number, turn: boolean): number {
    const base: number = (x * cols + y) * STRIDE_STATE;
    const dir2: number = dir * 2;
    const t: number = turn ? 1 : 0;
    return base + dir2 + t;
  }

  // depth-first search from (cx,cy), try to step to the next cell that must equal `target`
  // direction is fixed unless `turn` is true, in which case we may also take one clockwise 90° turn (dir+1)%4 exactly once
  function dfs(cx: number, cy: number, direction: number, turn: boolean, target: 0 | 1 | 2): number {
    const [dx, dy] = DIRS[direction];
    const nx: number = cx + dx;
    const ny: number = cy + dy;

    // if out of bounds or next cell doesn't match required value, we cannot extend further
    if (nx < 0 || ny < 0 || nx >= rows || ny >= cols) {
      return 0;
    }
    if (grid[nx][ny] !== target) {
      return 0;
    }

    // check memo
    const key: number = idx(nx, ny, direction, turn);
    if (memo[key] !== -1) {
      return memo[key];
    }

    // continue straight in the same direction
    let bestSteps: number = dfs(nx, ny, direction, turn, NEXT_AFTER[target]);

    // if we still have the right to turn, try a single clockwise 90° turn
    if (turn) {
      const cwDir: number = (direction + 1) % 4;
      const candidate: number = dfs(nx, ny, cwDir, false, NEXT_AFTER[target]);
      if (candidate > bestSteps) {
        bestSteps = candidate;
      }
    }

    // include the step we just took to (nx,ny)
    const total: number = bestSteps + 1;
    memo[key] = total;
    return total;
  }

  // scan every cell as a potential start (must be 1), try all 4 diagonals with one optional clockwise turn
  let answer: number = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (grid[i][j] === 1) {
        for (let dir = 0; dir < 4; dir += 1) {
          // +1 accounts for the starting cell itself
          const length: number = dfs(i, j, dir, true, 2) + 1;
          if (length > answer) {
            answer = length;
          }
        }
      }
    }
  }

  return answer;
}

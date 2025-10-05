export function pacificAtlantic(heights: number[][]): number[][] {
  if (heights.length === 0 || heights[0].length === 0) {
    return [];
  }

  const m: number = heights.length;
  const n: number = heights[0].length;

  const pac: boolean[][] = Array.from({ length: m }, () => {
    return Array<boolean>(n).fill(false);
  });
  const atl: boolean[][] = Array.from({ length: m }, () => {
    return Array<boolean>(n).fill(false);
  });

  const pacStarts: Array<[number, number]> = [];
  const atlStarts: Array<[number, number]> = [];

  // pacific borders: top row and left col
  for (let c = 0; c < n; c++) {
    pacStarts.push([0, c]);
  }
  for (let r = 0; r < m; r++) {
    pacStarts.push([r, 0]);
  }

  // atlantic borders: bottom row and right col
  for (let c = 0; c < n; c++) {
    atlStarts.push([m - 1, c]);
  }
  for (let r = 0; r < m; r++) {
    atlStarts.push([r, n - 1]);
  }

  // run bfs
  bfs(pacStarts, pac, heights, m, n);
  bfs(atlStarts, atl, heights, m, n);

  const res: number[][] = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (pac[r][c] && atl[r][c]) {
        res.push([r, c]);
      }
    }
  }

  return res;
}

function bfs(starts: Array<[number, number]>, seen: boolean[][], heights: number[][], m: number, n: number): void {
  // directions: up, down, left, right
  const dirs: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const q: Array<[number, number]> = [];

  for (const [r, c] of starts) {
    if (!seen[r][c]) {
      seen[r][c] = true;
    }
    q.push([r, c]);
  }

  while (q.length > 0) {
    const [r, c] = q.shift() as [number, number];

    for (const [dr, dc] of dirs) {
      const nr: number = r + dr;
      const nc: number = c + dc;

      if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
        if (!seen[nr][nc]) {
          // reverse-flow condition
          if (heights[nr][nc] >= heights[r][c]) {
            seen[nr][nc] = true;
            q.push([nr, nc]);
          }
        }
      }
    }
  }
}

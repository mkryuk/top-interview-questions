export function findFarmland(land: number[][]): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (land[i][j] === 1) {
        const topLeft = [i, j];
        // Find the bottom right corner of the contiguous farmland
        const bottomRight = findBottomRightCorner(topLeft, land);
        result.push([...topLeft, ...bottomRight]);
      }
    }
  }
  return result;
}

function findBottomRightCorner(start: number[], land: number[][]): [number, number] {
  // Right and Down directions
  const directions = [
    [0, 1],
    [1, 0],
  ];
  let [resI, resJ] = start;
  let queue: [number, number][] = [[resI, resJ]];
  while (queue.length > 0) {
    const [i, j] = queue.shift()!;

    // Skip already processed cells
    if (land[i][j] === 0) {
      continue;
    }

    // Explore possible directions
    directions.forEach(([di, dj]) => {
      const newI = i + di;
      const newJ = j + dj;
      if (newI < land.length && newJ < land[0].length && land[newI][newJ] === 1) {
        queue.push([newI, newJ]);
        // Update result borders
        resI = Math.max(resI, newI);
        resJ = Math.max(resJ, newJ);
      }
    });

    // Mark the cell as processed
    land[i][j] = 0;
  }
  return [resI, resJ];
}

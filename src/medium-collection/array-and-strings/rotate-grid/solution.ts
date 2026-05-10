export function rotateGrid(grid: number[][], k: number): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = grid.map((row) => [...row]);
  const layerCount = Math.min(rows, cols) / 2;

  for (let layer = 0; layer < layerCount; layer++) {
    rotateLayer(grid, result, layer, k);
  }

  return result;
}

function rotateLayer(grid: number[][], result: number[][], layer: number, k: number): void {
  const rows = grid.length;
  const cols = grid[0].length;
  const top = layer;
  const bottom = rows - 1 - layer;
  const left = layer;
  const right = cols - 1 - layer;
  const positions = getLayerPositions(top, bottom, left, right);
  const values = positions.map(([row, col]) => grid[row][col]);
  const length = values.length;
  const shift = k % length;

  for (let i = 0; i < length; i++) {
    const [row, col] = positions[i];
    const sourceIndex = (i + shift) % length;
    result[row][col] = values[sourceIndex];
  }
}

function getLayerPositions(top: number, bottom: number, left: number, right: number): number[][] {
  const positions: number[][] = [];

  // top row: left to right
  for (let col = left; col <= right; col++) {
    positions.push([top, col]);
  }

  // right column: top + 1 to bottom - 1
  for (let row = top + 1; row < bottom; row++) {
    positions.push([row, right]);
  }

  // bottom row: right to left
  for (let col = right; col >= left; col--) {
    positions.push([bottom, col]);
  }

  // left column: bottom - 1 to top + 1
  for (let row = bottom - 1; row > top; row--) {
    positions.push([row, left]);
  }

  return positions;
}

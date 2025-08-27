export function areaOfMaxDiagonal(dimensions: number[][]): number {
  const n = dimensions.length;
  const diagonals = new Array(n).fill(0);
  let maxDiagonal = 0;
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    const [h, w] = dimensions[i];
    const area = h * w;
    diagonals[i] = Math.sqrt(h * h + w * w);
    if (diagonals[i] > maxDiagonal) {
      maxDiagonal = diagonals[i];
      maxArea = h * w;
    } else if (diagonals[i] === maxDiagonal && area > maxArea) {
      maxArea = area;
    }
  }
  return maxArea;
}

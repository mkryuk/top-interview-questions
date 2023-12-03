export function minTimeToVisitAllPoints(points: number[][]): number {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    const xDiff = Math.abs(x2 - x1);
    const yDiff = Math.abs(y2 - y1);
    result += Math.max(xDiff, yDiff);
  }
  return result;
}

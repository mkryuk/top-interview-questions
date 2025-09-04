export function numberOfPairs(points: number[][]): number {
  let result = 0;

  points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  for (let i = 0; i < points.length - 1; i++) {
    const pointA = points[i];
    const xRange = [pointA[0] - 1, Infinity];
    const yRange = [-Infinity, pointA[1] + 1];

    for (let j = i + 1; j < points.length; j++) {
      const pointB = points[j];

      // bob must lie strictly inside the open box; this forbids third points on borders.
      if (pointB[0] > xRange[0] && pointB[0] < xRange[1] && pointB[1] > yRange[0] && pointB[1] < yRange[1]) {
        result++;
        // tighten left/bottom to bob to maintain monotone sweep and avoid double counting.
        xRange[0] = pointB[0];
        yRange[0] = pointB[1];
      }
    }
  }

  return result;
}

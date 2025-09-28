export function largestTriangleArea(points: number[][]): number {
  let best: number = 0;
  for (let i: number = 0; i < points.length; i += 1) {
    for (let j: number = i + 1; j < points.length; j += 1) {
      for (let k: number = j + 1; k < points.length; k += 1) {
        const a: number = area(points[i], points[j], points[k]);
        if (a > best) {
          best = a;
        }
      }
    }
  }

  return best;
}

function area(a: number[], b: number[], c: number[]): number {
  // cross product magnitude / 2: |(b - a) x (c - a)| / 2
  const abx: number = b[0] - a[0];
  const aby: number = b[1] - a[1];
  const acx: number = c[0] - a[0];
  const acy: number = c[1] - a[1];
  const cross: number = abx * acy - aby * acx;
  return Math.abs(cross) / 2;
}

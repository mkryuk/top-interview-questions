export function maxPoints(points: number[][]): number {
  let result = 0;

  for (let i = 0; i < points.length; i++) {
    const pt1 = points[i];
    const map = new Map<number, number>();
    for (let k = 0; k < points.length; k++) {
      if (k === i) {
        continue;
      }
      const pt2 = points[k];
      const sl = slope(pt1, pt2);
      if (!map.get(sl)) {
        // 2 because two points pt1 and pt2
        // are already on the same line
        map.set(sl, 2);
      } else {
        map.set(sl, map.get(sl)! + 1);
      }
      result = Math.max(result, map.get(sl)!);
    }
  }
  return result;
}

function slope(pt1: number[], pt2: number[]): number {
  const [x1, y1] = pt1;
  const [x2, y2] = pt2;
  return (y2 - y1) / (x2 - x1);
}

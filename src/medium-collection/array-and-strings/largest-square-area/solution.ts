export function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
  const rects: Rect[] = buildRects(bottomLeft, topRight);
  const n: number = rects.length;

  let best: number = 0;

  for (let i: number = 0; i < n; i += 1) {
    for (let j: number = i + 1; j < n; j += 1) {
      const area: number = intersectionMaxSquareArea(rects[i], rects[j]);
      if (area > best) {
        best = area;
      }
    }
  }

  return best;
}

type Rect = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

function buildRects(bottomLeft: number[][], topRight: number[][]): Rect[] {
  const n: number = bottomLeft.length;
  const rects: Rect[] = new Array<Rect>(n);

  for (let i: number = 0; i < n; i += 1) {
    rects[i] = {
      x1: bottomLeft[i][0],
      y1: bottomLeft[i][1],
      x2: topRight[i][0],
      y2: topRight[i][1],
    };
  }

  return rects;
}

function intersectionMaxSquareArea(a: Rect, b: Rect): number {
  const left: number = Math.max(a.x1, b.x1);
  const right: number = Math.min(a.x2, b.x2);
  const bottom: number = Math.max(a.y1, b.y1);
  const top: number = Math.min(a.y2, b.y2);

  const w: number = right - left;
  const h: number = top - bottom;

  if (w <= 0 || h <= 0) {
    // no overlap area
    return 0;
  }

  const side: number = Math.min(w, h);
  return side * side;
}

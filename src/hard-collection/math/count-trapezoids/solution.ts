export function countTrapezoids(points: number[][]): number {
  const n = points.length;
  const inf = 1e9 + 7; // sentinel slope for vertical lines
  const slopeToIntercept = new Map(); // slope -> list of intercepts (one per segment)
  const midToSlope = new Map(); // midpoint key -> list of slopes (one per segment)
  let result = 0;

  // build all segments, group them by slope and by midpoint
  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];

    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];
      const dx = x1 - x2;
      const dy = y1 - y2;

      let k, b;

      if (x2 === x1) {
        // vertical line
        k = inf;
        b = x1;
      } else {
        // non-vertical line
        k = (y2 - y1) / (x2 - x1);
        b = (y1 * dx - x1 * dy) / dx;
      }

      // encode midpoint using sums (x1 + x2, y1 + y2)
      const mid = (x1 + x2) * 10000 + (y1 + y2);

      if (!slopeToIntercept.has(k)) {
        slopeToIntercept.set(k, []);
      }
      if (!midToSlope.has(mid)) {
        midToSlope.set(mid, []);
      }

      slopeToIntercept.get(k).push(b);
      midToSlope.get(mid).push(k);
    }
  }

  // step 1: count all quadrilaterals with at least one pair of opposite parallel sides
  for (const sti of slopeToIntercept.values()) {
    if (sti.length === 1) {
      continue;
    }

    const cnt = new Map(); // intercept -> number of segments on that line

    for (const bVal of sti) {
      cnt.set(bVal, (cnt.get(bVal) || 0) + 1);
    }

    // for counts c1, c2, ..., sum_{i<j} ci * cj
    let totalSum = 0;
    for (const count of cnt.values()) {
      result += totalSum * count;
      totalSum += count;
    }
  }

  // step 2: subtract parallelograms once (they were counted twice above)
  for (const mts of midToSlope.values()) {
    if (mts.length === 1) {
      continue;
    }

    const cnt = new Map(); // slope -> number of segments with this slope and midpoint

    for (const kVal of mts) {
      cnt.set(kVal, (cnt.get(kVal) || 0) + 1);
    }

    // for counts c1, c2, ..., sum_{i<j} ci * cj = #pairs with same midpoint, different slopes
    let totalSum = 0;
    for (const count of cnt.values()) {
      result -= totalSum * count;
      totalSum += count;
    }
  }

  // final result = trapezoids (including parallelograms) counted exactly once
  return result;
}

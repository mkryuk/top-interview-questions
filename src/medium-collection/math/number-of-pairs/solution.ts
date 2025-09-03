export function numberOfPairs(points: number[][]): number {
  const n: number = points.length;

  const xs: number[] = new Array(n);
  const ys: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    xs[i] = points[i][0];
    ys[i] = points[i][1];
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        // skip same point
        continue;
      }

      const xi: number = xs[i];
      const yi: number = ys[i];
      const xj: number = xs[j];
      const yj: number = ys[j];

      // check "a is upper-left of b" (allows same x or same y; disallows identical points which are already filtered)
      if (xi <= xj && yi >= yj) {
        // define closed rectangle [xi, xj] × [yj, yi]
        let empty: boolean = true;

        for (let k = 0; k < n; k++) {
          if (k === i || k === j) {
            // ignore endpoints
            continue;
          }

          const xk: number = xs[k];
          const yk: number = ys[k];

          // if any point lies inside or on the border, the pair is invalid
          if (xk >= xi && xk <= xj && yk >= yj && yk <= yi) {
            empty = false;
            break;
          }
        }

        if (empty) {
          result++;
        }
      }
    }
  }

  return result;
}

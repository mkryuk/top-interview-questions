export function separateSquares(squares: number[][]): number {
  const { minY, maxY } = getYBounds(squares);
  const half = getTotalArea(squares) / 2.0;

  let lo = minY;
  let hi = maxY;

  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2.0;
    const below = getBelowArea(squares, mid);

    if (below < half) {
      lo = mid;
    } else {
      hi = mid;
    }
  }

  return hi;
}

function getBelowArea(squares: number[][], yLine: number): number {
  let sum = 0.0;

  for (let i = 0; i < squares.length; i++) {
    const yi = squares[i][1];
    const li = squares[i][2];

    const dy = yLine - yi;

    if (dy >= li) {
      sum += li * li;
    } else if (dy > 0.0) {
      sum += li * dy;
    }
  }

  return sum;
}

function getTotalArea(squares: number[][]): number {
  let total = 0.0;

  for (let i = 0; i < squares.length; i++) {
    const li = squares[i][2];
    total += li * li;
  }

  return total;
}

function getYBounds(squares: number[][]): { minY: number; maxY: number } {
  let minY = Number.POSITIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < squares.length; i++) {
    const yi = squares[i][1];
    const li = squares[i][2];

    if (yi < minY) {
      minY = yi;
    }

    const top = yi + li;
    if (top > maxY) {
      maxY = top;
    }
  }

  return { minY, maxY };
}

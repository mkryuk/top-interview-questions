export function minSwaps(grid: number[][]): number {
  const n = grid.length;
  const trailingZeros: number[] = [];

  // count trailing zeros per row; this determines which diagonal constraints each row can satisfy.
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 0) {
        count++;
      } else {
        break;
      }
    }
    trailingZeros.push(count);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    // row i needs at least (n - 1 - i) zeros at the end to keep cells above the diagonal as zero.
    const needed = n - 1 - i;
    let targetRow = i;

    while (targetRow < n && trailingZeros[targetRow] < needed) {
      ``;
      targetRow++;
    }

    // no row below can satisfy this position, so forming a valid grid is impossible.
    if (targetRow === n) {
      return -1;
    }

    // bring the nearest valid row up using adjacent swaps; nearest gives minimum added swaps.
    while (targetRow > i) {
      const temp = trailingZeros[targetRow];
      trailingZeros[targetRow] = trailingZeros[targetRow - 1];
      trailingZeros[targetRow - 1] = temp;
      targetRow--;
      result++;
    }
  }

  return result;
}

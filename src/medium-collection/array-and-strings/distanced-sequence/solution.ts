export function constructDistancedSequence(n: number): number[] {
  // calculate sequence length: for n > 1, it's 2*n - 1; for n = 1, it's 1.
  const size = n === 1 ? 1 : 2 * n - 1;
  const res: number[] = new Array(size).fill(0);
  const used: boolean[] = new Array(n + 1).fill(false);

  backtrack(res, used, 0, n, size);
  return res;
}

function backtrack(res: number[], used: boolean[], index: number, n: number, size: number): boolean {
  if (index === size) {
    return true;
  }

  // skip already filled positions.
  if (res[index] !== 0) {
    return backtrack(res, used, index + 1, n, size);
  }

  // try placing numbers from n down to 1 for lexicographical order.
  for (let num = n; num >= 1; num--) {
    if (used[num]) {
      continue;
    }

    if (num === 1) {
      // place 1 (only occurs once).
      res[index] = 1;
      used[1] = true;
      if (backtrack(res, used, index + 1, n, size)) {
        return true;
      }
      // backtrack.
      res[index] = 0;
      used[1] = false;
    } else {
      // for numbers > 1, place both occurrences.
      if (index + num < size && res[index + num] === 0) {
        res[index] = num;
        res[index + num] = num;
        used[num] = true;
        if (backtrack(res, used, index + 1, n, size)) {
          return true;
        }
        // backtrack.
        res[index] = 0;
        res[index + num] = 0;
        used[num] = false;
      }
    }
  }

  return false;
}

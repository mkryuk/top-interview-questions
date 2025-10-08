export function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  // sort potions ascending
  potions.sort((a, b) => {
    return a - b;
  });

  const m: number = potions.length;
  const res: number[] = new Array(spells.length);

  for (let i = 0; i < spells.length; i += 1) {
    // minimum potion strength needed: ceil(success / spell)
    // use integer math to avoid floating issues: ceil(a/b) = (a + b - 1) // b
    const s: number = spells[i];
    const need: number = Math.floor((success + s - 1) / s);

    // find first index in potions with value >= need
    const idx: number = lowerBound(potions, need);

    // number of successful pairs for this spell is all potions from idx to end
    res[i] = idx < 0 || idx >= m ? 0 : m - idx;
  }

  return res;
}

// standard lower_bound: first index with arr[idx] >= target
function lowerBound(arr: number[], target: number): number {
  let lo: number = 0;
  let hi: number = arr.length; // invariant: answer in [lo, hi)

  while (lo < hi) {
    const mid: number = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] < target) {
      // mid is too small, move right
      lo = mid + 1;
    } else {
      // arr[mid] >= target, keep mid in range
      hi = mid;
    }
  }

  // lo is the smallest index with arr[lo] >= target (or arr.length if none)
  return lo;
}

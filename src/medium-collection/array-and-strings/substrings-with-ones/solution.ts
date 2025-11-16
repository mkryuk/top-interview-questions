export function numberOfSubstrings(s: string): number {
  const n: number = s.length;

  // leftZero[k] = index of nearest zero to the left of k (1-based), or -1
  const leftZero: number[] = new Array(n + 1);
  leftZero[0] = -1;

  for (let i = 0; i < n; i++) {
    leftZero[i + 1] = i === 0 || s[i - 1] === "0" ? i : leftZero[i];
  }

  let result: number = 0;

  for (let right = 1; right <= n; right++) {
    // current zero count for substrings ending at 'right'
    let zeros: number = s[right - 1] === "0" ? 1 : 0;
    let boundary: number = right;

    // zeros limited by zeros^2 <= n
    while (boundary > 0 && zeros * zeros <= n) {
      // ones in (leftZero[boundary], right]
      const ones: number = right - leftZero[boundary] - zeros;

      // valid if ones ≥ zeros^2
      if (ones >= zeros * zeros) {
        const maxLeftShift: number = ones - zeros * zeros + 1;
        result += Math.min(boundary - leftZero[boundary], maxLeftShift);
      }

      // jump to previous zero block
      boundary = leftZero[boundary];
      zeros++;
    }
  }

  return result;
}

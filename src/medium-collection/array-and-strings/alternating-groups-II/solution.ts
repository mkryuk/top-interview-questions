export function numberOfAlternatingGroups(colors: number[], k: number): number {
  let mismatch = 0;
  const n = colors.length;

  // form the first window and count mismatches
  for (let i = 0; i < k - 1; i++) {
    if (colors[i] === colors[i + 1]) {
      mismatch++;
    }
  }

  let result = 0;
  // if there are no mismatches in the window the group is valid
  if (mismatch === 0) {
    result++;
  }

  for (let i = 1; i < n; i++) {
    // previous window start
    const prevStart = (i - 1) % n;
    // new window end
    const newEnd = (i + k - 1) % n;
    // remove previous mismatch from the window
    if (colors[prevStart] === colors[(prevStart + 1) % n]) {
      mismatch--;
    }
    // add next mismatch to the window
    if (colors[newEnd] === colors[(newEnd - 1 + n) % n]) {
      mismatch++;
    }
    // if there are no mismatches in the window the group is valid
    if (mismatch === 0) {
      result++;
    }
  }

  return result;
}

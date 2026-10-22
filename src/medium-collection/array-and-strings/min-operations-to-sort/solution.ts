export function minOperations(s: string): number {
  const n = s.length;

  const sorted = s.split("").sort().join("");

  // already sorted
  if (s === sorted) {
    return 0;
  }

  let left = 0;
  while (left < n && s[left] === sorted[left]) {
    left++;
  }

  let right = n - 1;
  while (right >= 0 && s[right] === sorted[right]) {
    right--;
  }

  // all mismatches fit inside a proper substring
  if (left > 0 || right < n - 1) {
    return 1;
  }

  // for n = 2, the only useful substring would be the whole string
  if (n === 2) {
    return -1;
  }

  // both ends have to change.
  // three operations are necessary exactly when the first character
  // is strictly larger than every inner character and the last
  // character is strictly smaller than every inner character.
  let firstIsStrictMaximum = true;
  let lastIsStrictMinimum = true;
  for (let i = 1; i < n - 1; i++) {
    if (s[0] <= s[i]) {
      firstIsStrictMaximum = false;
    }

    if (s[n - 1] >= s[i]) {
      lastIsStrictMinimum = false;
    }
  }

  if (firstIsStrictMaximum && lastIsStrictMinimum) {
    return 3;
  }

  return 2;
}

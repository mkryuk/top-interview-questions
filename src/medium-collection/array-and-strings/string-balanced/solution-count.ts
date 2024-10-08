export function minSwaps(s: string): number {
  let count = 0;
  let result = 0;
  for (const ch of s) {
    if (ch === "[") {
      count++;
    } else {
      count--;
    }
    if (count === -1) {
      result++;
      count += 2;
    }
  }
  return result;
}

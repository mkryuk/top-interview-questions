export function smallestRepunitDivByK(k: number): number {
  let remainder = 0;
  // we only need to check at most k different remainders
  for (let length = 1; length <= k; length++) {
    remainder = (remainder * 10 + 1) % k;
    if (remainder === 0) {
      return length;
    }
  }
  return -1;
}

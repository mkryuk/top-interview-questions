export function largestCombination(candidates: number[]): number {
  // 24 bits for numbers up to 10^7
  let result = new Array(24).fill(0);
  for (let candidate of candidates) {
    let index = 0;
    while (candidate > 0) {
      if ((candidate & 1) !== 0) {
        result[index]++;
      }
      candidate >>>= 1;
      index++;
    }
  }
  return Math.max(...result);
}

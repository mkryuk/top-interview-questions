export function maximumLength(nums: number[]): number {
  let oddCount = 0;
  let evenCount = 0;
  let altCount = 0;
  let lastParity = -1;
  for (const num of nums) {
    const parity = num % 2;
    if (parity === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    if (altCount === 0 || parity !== lastParity) {
      altCount++;
      lastParity = parity;
    }
  }
  return Math.max(oddCount, evenCount, altCount);
}

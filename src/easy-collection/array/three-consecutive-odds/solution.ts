export function threeConsecutiveOdds(arr: number[]): boolean {
  let consecutiveCount = 0;
  for (const num of arr) {
    if (num % 2 !== 0) {
      consecutiveCount++;
    } else {
      consecutiveCount = 0;
    }
    if (consecutiveCount === 3) {
      return true;
    }
  }
  return false;
}

export function countSymmetricIntegers(low: number, high: number): number {
  let result = 0;
  for (let i = low; i <= high; i++) {
    if (i < 100 && i % 11 === 0) {
      result++;
    } else if (i >= 1000 && i <= 10000) {
      const leftSum = Math.trunc(i / 1000) + Math.trunc((i % 1000) / 100);
      const rightSum = Math.trunc((i % 100) / 10) + (i % 10);
      if (leftSum === rightSum) {
        result++;
      }
    }
  }
  return result;
}

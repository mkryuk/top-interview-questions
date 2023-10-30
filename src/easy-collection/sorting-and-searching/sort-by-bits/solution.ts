export function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    let tempA = a;
    let tempB = b;
    let bitsA = 0;
    let bitsB = 0;
    while (tempA > 0 || tempB > 0) {
      bitsA += tempA & 1;
      bitsB += tempB & 1;
      tempA >>= 1;
      tempB >>= 1;
    }
    return bitsA - bitsB || a - b;
  });
}

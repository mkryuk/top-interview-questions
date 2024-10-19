export function findKthBit(n: number, k: number): string {
  if (n === 1) {
    return "0";
  }
  // len = 2 ^ n
  const len = Math.pow(2, n);
  // mid = len / 2
  const mid = Math.trunc(len / 2);
  // the mid bit always 1
  if (k === mid) {
    return "1";
  } else if (k < mid) {
    // id the k is in the left we can reduce n to n -1
    return findKthBit(n - 1, k);
  } else {
    // if k is in the right side
    // we should find the k-th bit from the end and invert it
    const corresponding = len - k;
    const bit = findKthBit(n - 1, corresponding);
    // invert the bit
    return bit === "0" ? "1" : "0";
  }
}

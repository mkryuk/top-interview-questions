export function minBitFlips(start: number, goal: number): number {
  let xorResult = start ^ goal;
  let result = 0;
  while (xorResult > 0) {
    result += xorResult & 1;
    xorResult >>= 1;
  }
  return result;
}

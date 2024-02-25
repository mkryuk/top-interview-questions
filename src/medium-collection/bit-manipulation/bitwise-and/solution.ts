export function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;
  // Shift right until left equals right
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  // Shift back to get the bitwise AND of the range
  return left << shift;
}

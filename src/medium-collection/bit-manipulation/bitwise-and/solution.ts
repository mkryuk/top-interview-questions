export function rangeBitwiseAnd(left: number, right: number): number {
  let result = left;
  for (let i = left + 1; i <= right; i++) {
    result = result & i;
  }
  return result;
}

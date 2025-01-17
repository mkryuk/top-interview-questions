export function doesValidArrayExist(derived: number[]): boolean {
  let xorSum = 0;
  // the xor-sum of the derived array should be 0
  // since there is always a duplicate occurrence of each element.
  for (const num of derived) {
    xorSum ^= num;
  }
  return xorSum === 0 ? true : false;
}

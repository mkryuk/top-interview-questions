export function kthCharacter(k: number, operations: number[]): string {
  const n = operations.length;
  let kBig = BigInt(k);
  // total shift we need to apply to the base character 'a'
  let shift = 0;

  // work backwards through the operations
  for (let i = n - 1; i >= 0; i--) {
    // length of the word just before operation i: 2^i
    const half = BigInt(1) << BigInt(i);
    if (kBig > half) {
      // We're in the appended half
      kBig -= half;
      if (operations[i] === 1) {
        // This was a "next-letter" append, so every char was +1
        shift = (shift + 1) % 26;
      }
      // for operations[i] === 0, no shift
    }
    // else: we're in the first half, no change
  }

  // base word is "a", apply the accumulated shift
  const baseCode = "a".charCodeAt(0);
  const resultCode = baseCode + shift;
  return String.fromCharCode(resultCode);
}

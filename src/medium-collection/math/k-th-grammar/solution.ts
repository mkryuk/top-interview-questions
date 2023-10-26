export function kthGrammar(n: number, k: number): number {
  // Convert 'k - 1' to a binary string. We subtract 1 because 'k' is 1-indexed.
  // Then, split the string into an array using '1' as the separator.
  // The length of this array minus one will give the number of '1's in the binary representation.
  const count = (k - 1).toString(2).split("1").length - 1;

  // Determine if the number of '1's is even or odd.
  // If it's even, the kth symbol is 0, otherwise, it's 1.
  return count % 2 === 0 ? 0 : 1;
}

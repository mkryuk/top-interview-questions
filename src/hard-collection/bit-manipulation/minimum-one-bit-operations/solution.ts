export function minimumOneBitOperations(n: number): number {
  // Base case: if n is 0, no operations are needed.
  if (n === 0) {
    return 0;
  }

  // Find the position of the most significant bit (MSB) set to 1.
  let bit = 1;
  while (1 << bit <= n) {
    bit++;
  }

  // Calculate the number of operations needed to flip the MSB.
  const operations = (1 << bit) - 1;

  // Calculate the number for the recursive step. This involves XORing `n` with
  // the number that has the MSB set to 1 and all other bits set to 0.
  const nextNumber = n ^ (1 << (bit - 1));

  // Recursive call to find the number of operations needed for the next number.
  const nextNumberOperations = minimumOneBitOperations(nextNumber);

  // The total operations are the operations needed to flip the MSB minus
  // the operations for the next number.
  return operations - nextNumberOperations;
}

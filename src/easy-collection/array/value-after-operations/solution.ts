export function finalValueAfterOperations(operations: string[]): number {
  let result = 0;
  for (const op of operations) {
    if (op === "X++" || op === "++X") {
      result++;
    } else {
      result--;
    }
  }
  return result;
}

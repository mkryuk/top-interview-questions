export function punishmentNumber(n: number): number {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    const squareString = (i * i).toString();
    if (canPartition(squareString, i, 0, 0)) {
      result += i * i;
    }
  }
  return result;
}

function canPartition(square: string, target: number, idx: number, currentSum: number): boolean {
  if (idx === square.length) {
    return currentSum === target;
  }

  // try every possible partition starting at index `idx`
  for (let i = idx; i < square.length; i++) {
    const partition = square.substring(idx, i + 1);
    const partNum = parseInt(partition, 10);
    // since all numbers are non-negative, break early if the sum exceeds the target.
    if (currentSum + partNum > target) {
      break;
    }
    // if a valid partition is found for the remainder, return true.
    if (canPartition(square, target, i + 1, currentSum + partNum)) {
      return true;
    }
  }
  return false;
}

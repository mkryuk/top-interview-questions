export function maximumValueSum(
  nums: number[],
  k: number,
  edges: number[][],
): number {
  let result: number = 0;
  let changes: number = 0;

  // Compute the best possible sum and count the number of nodes where XORing increases the value
  for (let num of nums) {
    let xorValue = num ^ k;
    result += Math.max(num, xorValue);
    if (xorValue > num) {
      changes++;
    }
  }

  // If cnt is odd, we need to adjust the sum
  if (changes % 2 !== 0) {
    let minDifference: number = Number.MAX_SAFE_INTEGER;
    for (let num of nums) {
      let xorValue = num ^ k;
      minDifference = Math.min(minDifference, Math.abs(num - xorValue));
    }
    result -= minDifference;
  }

  return result;
}

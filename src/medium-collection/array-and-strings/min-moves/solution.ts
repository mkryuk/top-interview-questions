export function minMoves(nums: number[], limit: number): number {
  const n = nums.length;
  const pairCount = n / 2;

  // possible target sums are from 2 to 2 * limit
  const diff: number[] = new Array(2 * limit + 2).fill(0);

  for (let i = 0; i < pairCount; i++) {
    const a = nums[i];
    const b = nums[n - 1 - i];
    const low = Math.min(a, b) + 1;
    const high = Math.max(a, b) + limit;
    const sum = a + b;
    // default cost for every pair is 2 moves
    // with one move, this pair can reach any target sum in [low, high]
    diff[low] -= 1;
    diff[high + 1] += 1;
    // with zero moves, it can reach exactly current sum
    diff[sum] -= 1;
    diff[sum + 1] += 1;
  }

  let result = Number.MAX_SAFE_INTEGER;
  let currentMoves = pairCount * 2;

  for (let target = 2; target <= 2 * limit; target++) {
    currentMoves += diff[target];
    result = Math.min(result, currentMoves);
  }

  return result;
}

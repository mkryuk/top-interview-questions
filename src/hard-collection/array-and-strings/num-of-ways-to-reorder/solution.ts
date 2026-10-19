const MOD = BigInt(1e9 + 7);

export function numOfWays(nums: number[]): number {
  const combinations = buildCombinations(nums.length);
  const ways = countWays(nums, combinations);

  // exclude the original ordering
  return Number((ways - 1n + MOD) % MOD);
}

function buildCombinations(n: number): bigint[][] {
  const combinations: bigint[][] = Array.from({ length: n + 1 }, () => Array<bigint>(n + 1).fill(0n));

  for (let i = 0; i <= n; i++) {
    combinations[i][0] = 1n;
    combinations[i][i] = 1n;

    for (let j = 1; j < i; j++) {
      combinations[i][j] = (combinations[i - 1][j - 1] + combinations[i - 1][j]) % MOD;
    }
  }

  return combinations;
}

function countWays(nums: number[], combinations: bigint[][]): bigint {
  if (nums.length <= 2) {
    return 1n;
  }

  const root = nums[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < root) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  const leftWays = countWays(left, combinations);
  const rightWays = countWays(right, combinations);

  const interleavings = combinations[nums.length - 1][left.length];

  return (((interleavings * leftWays) % MOD) * rightWays) % MOD;
}

export function xorAfterQueries(nums: number[], queries: number[][]): number {
  const mod = 1e9 + 7;

  applyQueries(nums, queries, mod);

  return getArrayXor(nums);
}

function applyQueries(nums: number[], queries: number[][], mod: number): void {
  for (const query of queries) {
    const [left, right, step, value] = query;
    applySingleQuery(nums, left, right, step, value, mod);
  }
}

function applySingleQuery(nums: number[], left: number, right: number, step: number, value: number, mod: number): void {
  let index = left;

  while (index <= right) {
    nums[index] = multiplyMod(nums[index], value, mod);
    index += step;
  }
}

function multiplyMod(a: number, b: number, mod: number): number {
  return (a * b) % mod;
}

function getArrayXor(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}

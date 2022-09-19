export function maxProduct(nums: number[]): number {
  let result = dfs(nums, 0);
  return result.max;
}

function dfs(
  numbs: number[],
  i: number,
): { neg: number; pos: number; max: number } {
  if (i === numbs.length - 1) {
    return {
      pos: numbs[i],
      neg: numbs[i],
      max: numbs[i],
    };
  }

  const temp = dfs(numbs, i + 1);
  const neg = temp.neg * numbs[i];
  const pos = temp.pos * numbs[i];
  temp.pos = Math.max(numbs[i], neg, pos);
  temp.neg = Math.min(numbs[i], neg, pos);
  temp.max = Math.max(temp.pos, temp.neg, temp.max);
  return temp;
}

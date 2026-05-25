export function maxJumps(arr: number[], d: number): number {
  const n = arr.length;
  const memo = new Array<number>(n).fill(0);
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, dfs(i, arr, d, memo));
  }
  return result;
}

function dfs(index: number, arr: number[], d: number, memo: number[]): number {
  if (memo[index] !== 0) {
    return memo[index];
  }
  const n = arr.length;
  let best = 1;
  // jump left
  for (let next = index - 1; next >= Math.max(0, index - d); next--) {
    if (arr[next] >= arr[index]) {
      break;
    }
    best = Math.max(best, 1 + dfs(next, arr, d, memo));
  }
  // jump right
  for (let next = index + 1; next <= Math.min(n - 1, index + d); next++) {
    if (arr[next] >= arr[index]) {
      break;
    }
    best = Math.max(best, 1 + dfs(next, arr, d, memo));
  }
  memo[index] = best;
  return best;
}

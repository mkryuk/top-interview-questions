export function knightDialer(n: number): number {
  const mod = 1e9 + 7;
  let result = 0;
  // jumps that knight can make from every number
  let jumps = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];
  const memo: number[][] = new Array(n + 1).fill(0).map(() => new Array(10));
  for (let i = 0; i < 10; i++) {
    result = (result + dp(n - 1, i, memo, jumps)) % mod;
  }
  return result;
}

function dp(left: number, num: number, memo: number[][], jumps: number[][]): number {
  const mod = 1e9 + 7;
  if (left === 0) {
    return 1;
  }
  if (memo[left][num] !== undefined) {
    return memo[left][num];
  }

  let nextJumps = jumps[num];
  let result = 0;
  for (let i = 0; i < nextJumps.length; i++) {
    result = (result + dp(left - 1, nextJumps[i], memo, jumps)) % mod;
  }
  memo[left][num] = result;
  return result;
}

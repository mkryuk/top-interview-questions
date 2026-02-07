export function minRemoval(nums: number[], k: number): number {
  const arr: number[] = nums.slice();
  arr.sort((a, b) => a - b);

  const n: number = arr.length;
  let best: number = 1;

  let l: number = 0;
  for (let r: number = 0; r < n; r += 1) {
    while (l <= r && !isBalanced(arr[l], arr[r], k)) {
      l += 1;
    }

    const len: number = r - l + 1;
    if (len > best) {
      best = len;
    }
  }

  return n - best;
}

function isBalanced(minVal: number, maxVal: number, k: number): boolean {
  // use bigint to avoid overflow: min can be 1e9, k can be 1e5 => product 1e14
  const left: bigint = BigInt(maxVal);
  const right: bigint = BigInt(minVal) * BigInt(k);
  return left <= right;
}

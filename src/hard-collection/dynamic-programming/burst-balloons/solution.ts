export function maxCoins(nums: number[]): number {
  const tempArr = [1, ...nums, 1];
  const len = tempArr.length;
  const map = new Array(len);
  for (let i = 0; i < len; i++) {
    map[i] = new Array(len).fill(0);
  }
  const result = pop(tempArr, 1, len - 2, map);
  return result;
}

function pop(
  nums: number[],
  left: number,
  right: number,
  map: number[][],
): number {
  if (right - left < 0) {
    return 0;
  }
  if (map[left][right] > 0) {
    return map[left][right];
  }
  let maxResult = 0;
  for (let i = left; i <= right; i++) {
    const result =
      nums[left - 1] * nums[i] * nums[right + 1] +
      pop(nums, left, i - 1, map) +
      pop(nums, i + 1, right, map);
    maxResult = Math.max(maxResult, result);
  }
  map[left][right] = maxResult;
  return maxResult;
}

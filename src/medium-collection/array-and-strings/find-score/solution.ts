export function findScore(nums: number[]): number {
  const n = nums.length;
  const indexNum: [number, number][] = [];
  for (let index = 0; index < n; index++) {
    indexNum.push([index, nums[index]]);
  }
  // sort by num or index in case nums are equal
  indexNum.sort(([i1, n1], [i2, n2]) => n1 - n2 || i1 - i2);
  const marked = new Array(n).fill(false);
  let result = 0;
  for (const [index, num] of indexNum) {
    if (marked[index]) {
      continue;
    }
    result += num;
    marked[index] = true;
    if (index > 0) {
      marked[index - 1] = true;
    }
    if (index < n - 1) {
      marked[index + 1] = true;
    }
  }
  return result;
}

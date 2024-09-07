export function countSmaller(nums: number[]): number[] {
  const offset = 10000; // offset negative to non-negative
  const size = 2 * 10000 + 2; // total possible values in nums plus one dummy
  const tree = new Array(size).fill(0);
  const result: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const count = query(nums[i] + offset, tree);
    result.unshift(count);
    update(nums[i] + offset, 1, tree, size);
  }
  return result;
}

// implement Binary Index Tree
function update(index: number, value: number, tree: number[], size: number): void {
  index++; // index in BIT is 1 more than the original index
  while (index < size) {
    tree[index] += value;
    index += index & -index;
  }
}

function query(index: number, tree: number[]): number {
  // return sum of [0, index)
  let result = 0;
  while (index >= 1) {
    result += tree[index];
    index -= index & -index;
  }
  return result;
}

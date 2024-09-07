export function countSmaller(nums: number[]): number[] {
  const offset = 10000; // offset negative to non-negative
  const size = 2 * 10000 + 1; // total possible values in nums
  const tree = new Array(size * 2).fill(0);
  let result: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let smaller_count = query(0, nums[i] + offset, tree, size);
    result.unshift(smaller_count);
    update(nums[i] + offset, 1, tree, size);
  }
  return result;
}

// implement segment tree
function update(index: number, value: number, tree: number[], size: number): void {
  index += size; // shift the index to the leaf
  // update from leaf to root
  tree[index] += value;
  while (index > 1) {
    index = Math.trunc(index / 2);
    tree[index] = tree[index * 2] + tree[index * 2 + 1];
  }
}

function query(left: number, right: number, tree: number[], size: number): number {
  // return sum of [left, right)
  let result = 0;
  left += size; // shift the index to the leaf
  right += size;
  while (left < right) {
    // if left is a right node
    // bring the value and move to parent's right node
    if (left % 2 == 1) {
      result += tree[left];
      left++;
    }
    // else directly move to parent
    left = Math.trunc(left / 2);
    // if right is a right node
    // bring the value of the left node and move to parent
    if (right % 2 == 1) {
      right--;
      result += tree[right];
    }
    // else directly move to parent
    right = Math.trunc(right / 2);
  }
  return result;
}

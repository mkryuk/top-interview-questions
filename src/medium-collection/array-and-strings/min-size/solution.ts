export function minimumSize(nums: number[], maxOperations: number): number {
  let min = 1;
  let max = Math.max(...nums);
  let result = max;
  while (min <= max) {
    const mid = min + Math.floor((max - min) / 2);
    if (canDivide(nums, maxOperations, mid)) {
      result = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return result;
}

function canDivide(nums: number[], maxOperations: number, target: number): boolean {
  let operations = 0;
  for (const num of nums) {
    // if num is larger than target, we need to split it
    // the number of splits required is (num - 1) // target
    // Example: If num = 9 and target = 3,
    // splitting into bags of size 3: we get [3,3,3], that's 2 splits.
    // (9 - 1) // 3 = 8 // 3 = 2 operations
    if (num > target) {
      operations += Math.floor((num - 1) / target);
    }
    if (operations > maxOperations) {
      return false;
    }
  }
  return true;
}

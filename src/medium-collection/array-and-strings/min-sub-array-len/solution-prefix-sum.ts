export function minSubArrayLen(target: number, nums: number[]): number {
  let n = nums.length;
  let minLength = n + 1; // Initialize minLength to a value larger than any possible result

  // Compute prefix sums where prefixSum[i] is sum of nums[0] through nums[i - 1]
  let prefixSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  // For each prefixSum[i], binary search for the smallest j (j > i) such that
  // prefixSum[j] >= prefixSum[i] + target (i.e., sum of subarray nums[i] through nums[j - 1] >= target)
  for (let i = 0; i <= n; i++) {
    let toFind = target + prefixSum[i];
    let found = binarySearch(prefixSum, toFind);
    // If such j exists, update minLength
    if (found >= 0) {
      minLength = Math.min(minLength, found - i);
    }
  }

  // If no subarray with sum >= target was found, return 0
  if (minLength == n + 1) {
    return 0;
  }

  // Return minimal length of the subarray with sum >= target
  return minLength;
}

// Binary search function to find the smallest index `i` in prefixSum such that prefixSum[i] >= toFind
function binarySearch(prefixSum: number[], toFind: number): number {
  let left = 0;
  let right = prefixSum.length - 1;
  let answer = -1; // Initialize as -1, if there's no such index `i`, -1 will be returned

  // Perform binary search
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    // If prefixSum[mid] >= toFind, update answer to mid and continue searching on the left side
    if (prefixSum[mid] >= toFind) {
      answer = mid;
      right = mid - 1;
    } else {
      // If prefixSum[mid] < toFind, continue searching on the right side
      left = mid + 1;
    }
  }

  // Return the smallest index `i` such that prefixSum[i] >= toFind, or -1 if no such index exists
  return answer;
}

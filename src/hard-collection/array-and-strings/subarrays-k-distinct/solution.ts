export function subarraysWithKDistinct(nums: number[], k: number): number {
  // The number of subarrays with exactly K distinct numbers is the difference
  // between the number of subarrays with at most K and at most K-1 distinct numbers
  return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
}

function atMostKDistinct(nums: number[], k: number): number {
  let count = 0;
  let left = 0;
  const freqMap = new Map<number, number>();

  for (let right = 0; right < nums.length; right++) {
    // If this is a new element, decrement k
    if (!freqMap.has(nums[right]) || freqMap.get(nums[right]) === 0) {
      k--;
    }
    freqMap.set(nums[right], (freqMap.get(nums[right]) || 0) + 1);

    // If k < 0, move the left pointer to make the subarray valid
    while (k < 0) {
      freqMap.set(nums[left], freqMap.get(nums[left])! - 1);
      if (freqMap.get(nums[left]) === 0) {
        k++;
      }
      left++;
    }

    // Add the number of new valid subarrays added by adding the current element
    count += right - left + 1;
  }

  return count;
}

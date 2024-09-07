export function intersect(nums1: number[], nums2: number[]): number[] {
  let result = [];
  let [smaller, bigger] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];
  smaller.sort((a, b) => a - b);
  bigger.sort((a, b) => a - b);
  for (let i = 0, k = 0; i < smaller.length; i++) {
    const idx = bigger.indexOf(smaller[i], k);
    if (idx !== -1) {
      result.push(smaller[i]);
      k = idx + 1;
    }
  }

  return result;
}

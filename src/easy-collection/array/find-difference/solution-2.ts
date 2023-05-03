export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const res1 = new Set(nums1);
  const res2 = new Set(nums2);

  nums1.forEach((num1) => res2.delete(num1));
  nums2.forEach((num2) => res1.delete(num2));

  return [Array.from(res1), Array.from(res2)];
}

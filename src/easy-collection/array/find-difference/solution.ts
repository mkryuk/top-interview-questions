export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const nums1Set = new Set<number>(nums1);
  const nums2Set = new Set<number>(nums2);
  const notInNums1 = [];
  const notInNums2 = [];

  const uniqueElements = new Set<number>([...nums1, ...nums2]);

  for (const num of Array.from(uniqueElements)) {
    if (!nums2Set.has(num)) {
      notInNums2.push(num);
    }
    if (!nums1Set.has(num)) {
      notInNums1.push(num);
    }
  }

  return [notInNums2, notInNums1];
}

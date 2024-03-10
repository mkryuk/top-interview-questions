export function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1Set = new Set(nums1);
  const resultSet = new Set<number>();
  for (const num of nums2) {
    if (nums1Set.has(num)) {
      resultSet.add(num);
    }
  }
  return Array.from(resultSet);
}

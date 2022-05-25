export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  let map = new Map<number, number>();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      const sum = nums1[i] + nums2[j];
      if (!map.has(sum)) {
        map.set(sum, 1);
      } else {
        map.set(sum, (map.get(sum) ?? 1) + 1);
      }
    }
  }

  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      const sum = nums3[i] + nums4[j];
      if (map.has(-sum)) {
        count += map.get(-sum) ?? 1;
      } else if (sum === 0 && map.has(sum)) {
        count++;
      }
    }
  }
  return count;
}

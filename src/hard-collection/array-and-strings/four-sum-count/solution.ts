export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      for (let k = 0; k < nums3.length; k++) {
        for (let l = 0; l < nums4.length; l++) {
          if (nums1[i] + nums2[j] + nums3[k] + nums4[l] === 0) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

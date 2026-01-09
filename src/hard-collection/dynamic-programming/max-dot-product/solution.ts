export function maxDotProduct(nums1: number[], nums2: number[]): number {
  const n: number = nums1.length;
  const m: number = nums2.length;

  // dpPrev[j] = dp for previous row (i-1), dpCurr[j] for current row i
  let dpPrev: number[] = new Array(m + 1);
  for (let j: number = 0; j <= m; j++) {
    dpPrev[j] = Number.NEGATIVE_INFINITY;
  }

  for (let i: number = 1; i <= n; i++) {
    const dpCurr: number[] = new Array(m + 1);
    dpCurr[0] = Number.NEGATIVE_INFINITY;

    for (let j: number = 1; j <= m; j++) {
      const prod: number = nums1[i - 1] * nums2[j - 1];

      const skipA: number = dpPrev[j];
      const skipB: number = dpCurr[j - 1];
      const takeOnly: number = prod;
      const takeExtend: number = dpPrev[j - 1] + prod;

      dpCurr[j] = Math.max(skipA, skipB, takeOnly, takeExtend);
    }

    dpPrev = dpCurr;
  }

  return dpPrev[m];
}

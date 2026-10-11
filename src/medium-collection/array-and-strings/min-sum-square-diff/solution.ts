export function minSumSquareDiff(nums1: number[], nums2: number[], k1: number, k2: number): number {
  const n = nums1.length;
  const diffs: number[] = new Array(n);
  let totalDiff = 0;

  for (let i = 0; i < n; i++) {
    diffs[i] = Math.abs(nums1[i] - nums2[i]);
    totalDiff += diffs[i];
  }

  let k = k1 + k2;
  // we can make every difference zero
  if (k >= totalDiff) {
    return 0;
  }

  diffs.sort((a, b) => b - a);

  // sentinel simplifies processing the last group
  diffs.push(0);

  for (let i = 0; i < n; i++) {
    const count = i + 1;
    const current = diffs[i];
    const next = diffs[i + 1];

    // operations needed to lower all first 'count' values to 'next'
    const needed = (current - next) * count;
    if (k >= needed) {
      k -= needed;
      continue;
    }

    // we cannot lower the whole group to 'next'
    const fullLevels = Math.floor(k / count);
    const remainder = k % count;
    const level = current - fullLevels;

    let result = 0;

    // 'remainder' elements can be lowered one additional step
    result += remainder * (level - 1) * (level - 1);
    result += (count - remainder) * level * level;

    // remaining elements were never changed
    for (let j = i + 1; j < n; j++) {
      result += diffs[j] * diffs[j];
    }

    return result;
  }

  return 0;
}

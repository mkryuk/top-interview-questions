export function maxDistinctElements(nums: number[], k: number): number {
  if (nums.length === 0) {
    return 0;
  }

  // build intervals [l, r] for each element
  const intervals: Array<{ l: number; r: number }> = [];
  for (let i = 0; i < nums.length; i += 1) {
    const l = nums[i] - k;
    const r = nums[i] + k;
    intervals.push({ l, r });
  }

  // sort by right endpoint asc, then by left asc
  intervals.sort((a, b) => (a.r !== b.r ? a.r - b.r : a.l - b.l));

  // sweep with the smallest unused integer pointer
  let curr = -Infinity; // the next integer we can try to use
  let used = 0;

  for (let i = 0; i < intervals.length; i += 1) {
    const l = intervals[i].l;
    const r = intervals[i].r;

    // choose the earliest integer we can place that hasn't been used yet
    const x = Math.max(l, curr);

    // if it fits in the interval, assign it and move the pointer forward
    if (x <= r) {
      used += 1;
      curr = x + 1;
    }
  }

  return used;
}

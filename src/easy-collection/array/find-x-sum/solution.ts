export function findXSum(nums: number[], k: number, x: number): number[] {
  const MAX_VAL = 50;
  const counts: number[] = new Array(MAX_VAL + 1).fill(0);

  // build initial window
  for (let i = 0; i < k; i += 1) {
    addToCounts(counts, nums[i], 1);
  }

  const result: number[] = [];
  result.push(xSumFromCounts(counts, x));

  for (let i = k; i < nums.length; i += 1) {
    // remove outgoing element
    addToCounts(counts, nums[i - k], -1);

    // add incoming element
    addToCounts(counts, nums[i], 1);

    // compute x-sum for current window
    result.push(xSumFromCounts(counts, x));
  }

  return result;
}

function addToCounts(counts: number[], val: number, delta: number): void {
  if (val >= 0 && val < counts.length) {
    counts[val] += delta;
  }
}

function xSumFromCounts(counts: number[], x: number): number {
  const pairs: Array<{ val: number; cnt: number }> = [];
  for (let val = 0; val < counts.length; val += 1) {
    if (counts[val] > 0) {
      pairs.push({ val, cnt: counts[val] });
    }
  }

  pairs.sort((a, b) => (b.cnt !== a.cnt ? b.cnt - a.cnt : b.val - a.val));

  let take = Math.min(x, pairs.length);
  let sum = 0;
  for (let i = 0; i < take; i += 1) {
    sum += pairs[i].val * pairs[i].cnt;
  }

  return sum;
}

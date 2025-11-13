export function minOperations(nums: number[]): number {
  const n = nums.length;

  // if there is already at least one '1', each non-one can be turned to 1 in one move using an adjacent 1
  let ones = 0;
  for (const x of nums) {
    if (x === 1) {
      ones += 1;
    }
  }
  if (ones > 0) {
    return n - ones;
  }

  // there is no '1'. we must create a '1' first by shrinking some subarray via gcds to 1.
  // find the shortest subarray with gcd == 1.
  let best = Number.POSITIVE_INFINITY;

  for (let i = 0; i < n; i += 1) {
    let g = nums[i];
    if (g === 1) {
      // early stop for this i (though this branch won't hit because we handled ones above)
      best = Math.min(best, 1);
      break;
    }
    for (let j = i + 1; j < n; j += 1) {
      g = gcd(g, nums[j]);
      if (g === 1) {
        // length is (j - i + 1)
        best = Math.min(best, j - i + 1);
        // we can break because extending j will only increase the length
        break;
      }
    }
  }

  // if we never found gcd == 1 for any subarray, it's impossible
  if (!Number.isFinite(best)) {
    return -1;
  }

  // cost to create one '1' inside that subarray is (best - 1) operations
  // after we have a single '1', it takes (n - 1) more operations to spread it to all elements
  return best - 1 + (n - 1);
}

function gcd(a: number, b: number): number {
  if (a < 0) {
    a = -a;
  }
  if (b < 0) {
    b = -b;
  }

  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

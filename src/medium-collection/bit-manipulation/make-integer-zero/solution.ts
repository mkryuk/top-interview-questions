export function makeTheIntegerZero(num1: number, num2: number): number {
  for (let k = 1; k <= 60; k += 1) {
    const tNumber = num1 - k * num2;

    // t must be non-negative
    if (tNumber < 0) {
      continue;
    }

    const t: bigint = BigInt(tNumber);

    // k <= t (since the minimal sum of k powers of two is k * 2^0 = k)
    if (BigInt(k) > t) {
      continue;
    }

    if (countBits(t) <= k) {
      return k;
    }
  }

  // if no k in [1, 60] works, it's impossible
  return -1;
}

function countBits(x: bigint): number {
  let cnt: number = 0;
  let v: bigint = x;

  // remove lowest set bit each step
  while (v !== BigInt(0)) {
    // v & (v - 1) clears lowest set bit
    v = v & (v - BigInt(1));
    cnt += 1;
  }

  return cnt;
}

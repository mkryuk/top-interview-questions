export function countTrapezoids(points: number[][]): number {
  const MOD = BigInt(1e9 + 7);

  // count how many points lie on each y-coordinate
  const freq = new Map<number, number>();
  for (const [x, y] of points) {
    if (!freq.has(y)) {
      freq.set(y, 0);
    }
    // increment count for this y
    freq.set(y, freq.get(y)! + 1);
  }

  let sumA = BigInt(0); // S = sum of a_i
  let sumA2 = BigInt(0); // S2 = sum of a_i^2

  for (const cnt of freq.values()) {
    if (cnt >= 2) {
      const a = comb2(cnt); // a_i = C(cnt, 2)
      sumA += a; // accumulate S
      sumA2 += a * a; // accumulate S2
    }
  }

  // if less than two y-levels have at least two points, answer is 0
  if (sumA === BigInt(0)) {
    return 0;
  }

  // total = (S^2 - S2) / 2
  const totalPairs = sumA * sumA - sumA2;
  let resultBig = (totalPairs / BigInt(2)) % MOD;

  if (resultBig < 0) {
    resultBig += MOD;
  }

  return Number(resultBig);
}

// compute n choose 2 as bigint
function comb2(count: number): bigint {
  const c = BigInt(count);
  return (c * (c - BigInt(1))) / BigInt(2);
}

export function minOperations(s: string, k: number): number {
  const n: number = s.length;

  // count zeros
  let z: number = 0;
  for (let i: number = 0; i < n; i++) {
    if (s[i] === "0") {
      z++;
    }
  }

  // already all ones
  if (z === 0) {
    return 0;
  }

  const o: number = n - z;

  // special case: each operation flips all indices
  if (k === n) {
    // 0 ops works only if already all ones (handled above)
    // 1 op works only if string is all zeros
    if (z === n) {
      return 1;
    }

    return -1;
  }

  // if k is even, total flips (t*k) is always even, so zeros must be even (parity constraint)
  if (k % 2 === 0 && z % 2 === 1) {
    return -1;
  }

  let ans: number = Number.POSITIVE_INFINITY;

  // try even t and odd t (only those that can satisfy parity)
  for (let parity: number = 0; parity <= 1; parity++) {
    // if k is odd, t*k parity == t parity, so t parity must match z parity
    if (k % 2 === 1) {
      if (parity % 2 !== z % 2) {
        continue;
      }
    }

    const t0a: number = ceilDiv(z, k);

    // upper-bound feasibility turns into: t*(n-k) >= penalty,
    // where penalty = z if t is even, else o
    const penalty: number = parity === 0 ? z : o;
    const t0b: number = ceilDiv(penalty, n - k);

    let t: number = Math.max(t0a, t0b);

    // adjust to required parity
    if (t % 2 !== parity) {
      t++;
    }

    // final verification (cheap and safe)
    if (isFeasible(t, n, k, z, o)) {
      ans = Math.min(ans, t);
    }
  }

  return ans === Number.POSITIVE_INFINITY ? -1 : ans;
}

function isFeasible(t: number, n: number, k: number, z: number, o: number): boolean {
  if (t <= 0) {
    return false;
  }

  const totalFlips: number = t * k;

  // each zero needs an odd number of flips, so at least 1 per zero
  if (totalFlips < z) {
    return false;
  }

  // sum parity must match: odds contribute z (mod 2), evens contribute 0
  if ((totalFlips - z) % 2 !== 0) {
    return false;
  }

  // max achievable flips with parity constraints:
  // if t even: max sum = n*t - z
  // if t odd : max sum = n*t - o
  const penalty: number = t % 2 === 0 ? z : o;
  if (t * (n - k) < penalty) {
    return false;
  }

  return true;
}

function ceilDiv(a: number, b: number): number {
  // assumes a >= 0, b > 0
  return Math.floor((a + b - 1) / b);
}

const MOD: bigint = BigInt(1e9 + 7);

export function idealArrays(n: number, maxValue: number): number {
  // build smallest‑prime‑factor table
  const spf = new Int16Array(maxValue + 1);
  for (let i = 2; i <= maxValue; ++i) {
    if (spf[i] === 0) {
      for (let j = i; j <= maxValue; j += i) {
        if (spf[j] === 0) {
          spf[j] = i;
        }
      }
    }
  }

  // 2^13 = 8192 ≤ 10 000, so 13 is the largest exponent we can meet
  const MAX_EXP = 13;
  const comb = makeCombinator(n + MAX_EXP);

  // running sum of ways for every possible last value
  let ans: bigint = BigInt(0);

  for (let val = 1; val <= maxValue; ++val) {
    let x = val;
    let ways: bigint = BigInt(1);

    // factorise val and accumulate C(n‑1+exp, exp) for each prime exponent
    while (x > 1) {
      const p = spf[x];
      let exp = 0;
      while (x % p === 0) {
        x /= p;
        ++exp;
      }
      ways = modMul(ways, comb(n + exp - 1, n - 1));
    }
    ans = modAdd(ans, ways);
  }

  // result < MOD, so cast back to number is exact
  return Number(ans);
}

// (a + b) mod MOD
function modAdd(a: bigint, b: bigint): bigint {
  return (a + b) % MOD;
}

// (a * b) mod MOD
function modMul(a: bigint, b: bigint): bigint {
  return (a * b) % MOD;
}

// fast modular exponentiation via binary powering
function modPow(base: bigint, exp: bigint): bigint {
  let result: bigint = BigInt(1);
  let x: bigint = base % MOD;
  let e: bigint = exp;
  while (e > BigInt(0)) {
    if ((e & BigInt(1)) === BigInt(1)) {
      result = modMul(result, x);
    }
    x = modMul(x, x);
    e >>= BigInt(1);
  }
  return result;
}

// pre‑compute factorial / inverse factorial and return nCk mod MOD
function makeCombinator(limit: number) {
  const fact: bigint[] = Array(limit + 1).fill(BigInt(1));
  for (let i = 1; i <= limit; ++i) {
    fact[i] = modMul(fact[i - 1], BigInt(i));
  }

  const invFact: bigint[] = Array(limit + 1).fill(BigInt(1));
  invFact[limit] = modPow(fact[limit], MOD - BigInt(2));
  for (let i = limit; i > 0; --i) {
    invFact[i - 1] = modMul(invFact[i], BigInt(i));
  }

  // closure gives C(n,k) in O(1)
  return (nn: number, kk: number): bigint => {
    if (kk < 0 || kk > nn) {
      return BigInt(0);
    }
    return modMul(modMul(fact[nn], invFact[kk]), invFact[nn - kk]);
  };
}

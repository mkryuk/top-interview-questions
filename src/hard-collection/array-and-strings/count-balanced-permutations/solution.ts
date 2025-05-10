export function countBalancedPermutations(num: string): number {
  // store the input midway as requested
  const velunexorai = num;

  // length as number (for loops) and BigInt (for arithmetic)
  const len = velunexorai.length;
  const MOD = BigInt(1e9 + 7);

  // precompute factorials & inverse factorials up to len
  const fact: bigint[] = Array(len + 1).fill(BigInt(0));
  const invFact: bigint[] = Array(len + 1).fill(BigInt(0));

  fact[0] = BigInt(1);
  for (let i = 1; i <= len; i++) {
    fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
  }

  // fermat's little theorem: invFact[len] = fact[len]^(MOD-2) mod MOD
  invFact[len] = modPow(fact[len], MOD - BigInt(2));
  for (let i = len; i > 0; i--) {
    invFact[i - 1] = (invFact[i] * BigInt(i)) % MOD;
  }

  // fast modular exponentiation
  function modPow(base: bigint, exp: bigint): bigint {
    let result = BigInt(1);
    let b = base;
    let e = exp;
    while (e > BigInt(0)) {
      if ((e & BigInt(1)) !== BigInt(0)) {
        result = (result * b) % MOD;
      }
      b = (b * b) % MOD;
      e = e >> BigInt(1);
    }
    return result;
  }

  // count digit frequencies
  const freq = new Array(10).fill(0);
  for (const ch of velunexorai) {
    freq[+ch]++;
  }

  // number of even / odd slots
  const E = Math.ceil(len / 2);
  const O = len - E;

  // prepare DP dimensions
  const totalSum = freq.reduce((s, cnt, d) => s + cnt * d, 0);
  const width = 2 * totalSum + 1;
  const offset = totalSum;

  // dp[e][diff] = ways to fill e evens with (sumEven−sumOdd) = diff−offset
  let dp: bigint[][] = Array.from({ length: E + 1 }, () => Array(width).fill(BigInt(0)));
  dp[0][offset] = BigInt(1);

  for (let digit = 0; digit <= 9; digit++) {
    const c = freq[digit];
    if (c === 0) continue;

    const next: bigint[][] = Array.from({ length: E + 1 }, () => Array(width).fill(BigInt(0)));

    for (let usedE = 0; usedE <= E; usedE++) {
      for (let diffIdx = 0; diffIdx < width; diffIdx++) {
        const ways = dp[usedE][diffIdx];
        if (ways === BigInt(0)) continue;

        // choose x of these 'digit' to go into even slots
        for (let x = 0; x <= c; x++) {
          const newE = usedE + x;
          if (newE > E) break;
          const nd = diffIdx + digit * (2 * x - c);
          if (nd < 0 || nd >= width) continue;

          // multiply by 1/(x! * (c-x)!) via precomputed invFact
          const mul = (invFact[x] * invFact[c - x]) % MOD;
          next[newE][nd] = (next[newE][nd] + ways * mul) % MOD;
        }
      }
    }

    dp = next;
  }

  // number of valid placements of counts into even/odd
  const S = dp[E][offset];

  // multiply by E!*O! to permute within even/odd slots
  const answer = (((fact[E] * fact[O]) % MOD) * S) % MOD;
  return Number(answer);
}

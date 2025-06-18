export function countGoodArrays(n: number, m: number, k: number): number {
  const MOD = BigInt(1000000007);
  const N = n - 1;
  if (k < 0 || k > N) {
    return 0;
  }

  // fast modular exponentiation
  const modPow = (base: bigint, exp: bigint): bigint => {
    let result = BigInt(1);
    let b = base % MOD;
    let e = exp;
    while (e > BigInt(0)) {
      if (e & BigInt(1)) {
        result = (result * b) % MOD;
      }
      b = (b * b) % MOD;
      e = e >> BigInt(1);
    }
    return result;
  };

  // build factorials and inverse factorials up to N
  const fact = new Array<bigint>(N + 1).fill(BigInt(0));
  const invFact = new Array<bigint>(N + 1).fill(BigInt(0));
  fact[0] = BigInt(1);
  for (let i = 1; i <= N; i++) {
    fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
  }

  // invFact[N] = fact[N]^(MOD-2) mod MOD
  invFact[N] = modPow(fact[N], MOD - BigInt(2));
  for (let i = N; i > 0; i--) {
    invFact[i - 1] = (invFact[i] * BigInt(i)) % MOD;
  }

  // C(N, k) = fact[N] * invFact[k] * invFact[N-k] mod MOD
  const comb = (((fact[N] * invFact[k]) % MOD) * invFact[N - k]) % MOD;

  // multiply by m (first element) and (m-1)^(N-k) for each change
  const result = (((comb * BigInt(m)) % MOD) * modPow(BigInt(m - 1), BigInt(N - k))) % MOD;

  return Number(result);
}

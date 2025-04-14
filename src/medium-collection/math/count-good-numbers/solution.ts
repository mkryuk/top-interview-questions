export function countGoodNumbers(n: number): number {
  const MOD = BigInt(1e9 + 7);

  function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
    let result = BigInt(1);
    base = base % mod;
    while (exp > BigInt(0)) {
      if (exp % BigInt(2) === BigInt(1)) {
        result = (result * base) % mod;
      }
      base = (base * base) % mod;
      exp = exp / BigInt(2);
    }
    return result;
  }

  // even-indexed positions (0-indexed): Math.ceil(n/2)
  // odd-indexed positions: Math.floor(n/2)
  const evenCount = BigInt(Math.ceil(n / 2));
  const oddCount = BigInt(Math.floor(n / 2));

  // there are 5 choices for even-indexed positions and 4 for odd-indexed.
  const evenWays = modPow(BigInt(5), evenCount, MOD);
  const oddWays = modPow(BigInt(4), oddCount, MOD);

  const result = (evenWays * oddWays) % MOD;
  return Number(result);
}

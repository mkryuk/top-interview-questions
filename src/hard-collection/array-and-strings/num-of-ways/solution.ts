export function numOfWays(n: number): number {
  const MOD: bigint = BigInt(1e9 + 7);

  // two pattern types for a row:
  // - aba: first and third same, middle different (e.g., R Y R)
  // - abc: all three different (e.g., R Y G)
  //
  // for n = 1:
  // aba count = 3 * 2 = 6
  // abc count = 3 * 2 * 1 = 6
  let aba: bigint = BigInt(6);
  let abc: bigint = BigInt(6);

  for (let i: number = 2; i <= n; i += 1) {
    // transitions between row types:
    // next_aba = 3 * aba + 2 * abc
    // next_abc = 2 * aba + 2 * abc
    const nextAba: bigint = (BigInt(3) * aba + BigInt(2) * abc) % MOD;
    const nextAbc: bigint = (BigInt(2) * aba + BigInt(2) * abc) % MOD;

    aba = nextAba;
    abc = nextAbc;
  }

  const ans: bigint = (aba + abc) % MOD;
  return Number(ans);
}
